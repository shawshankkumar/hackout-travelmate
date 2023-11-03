import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ErrorProps {
  code: number;
}

export default function Error({ code }: ErrorProps) {
  const errors = [
    {
      status: 404,
      title: "Page not found",
      description:
        "The page you are looking for does not exist.",
    },
    {
      status: 500,
      title: "Something went wrong",
      description: "Oops! Something broke. Try again in a while.",
    },
    {
      status: 409,
      title: "Email already registered",
      description:
        "Twins? You have already registered with your email address.",
    },
  ];

  const { title, description } = errors.find((err) => err.status === code) || errors[0];


  return (
    <div className="flex gap-4 flex-col justify-center items-center h-[80vh]">
      <div className="text-9xl font-bold">{code}</div>
      <h1 className="text-4xl font-medium">{title}</h1>
      <h3 className="text-sm md:text-lg">
        {description}
      </h3>
      <Button>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  )
}
