import { Resend } from "resend";
import config from "@/utils/config";

const resend = new Resend(config.MAIL_KEY);

export const sendMail = async (to: string[], subject: string, text: string) => {
  await resend.emails.send({
    from: "TravelMate <onboarding@resend.dev>",
    to: to,
    subject: subject,
    text: text,
    tags: [
      {
        name: "category",
        value: "confirm_email",
      },
    ],
  });
};
