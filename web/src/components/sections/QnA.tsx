import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";

const QuestionsAndAnswers = [
  {
    question: "How do I book a session?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
  },
  {
    question: "What is the cost of a session?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
  },
  {
    question: "How do I book a session?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
  },
  {
    question: "What is the cost of a session?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
  },
];

const FAQ = ({ question, answer, index }: { question: string; answer: string, index: number }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="w-full flex items-center gap-10 border-b pb-6">
      <div>
        <h1 className="text-[#b3490c]">0{index}</h1>
      </div>
      <div className="w-full flex flex-col items-start gap-5">
        <div
        className="w-full flex justify-between"
          onClick={() => {
            setShowAnswer(!showAnswer);
          }}
        >
          <div>
            <h1 className={showAnswer ? "text-3xl font-bold text-[#b3490c] cursor-pointer" : "text-3xl font-bold text-black cursor-pointer"}>
              {question}
            </h1>
          </div>
          <div>
            {showAnswer ? (
              <CaretUpIcon color="#b3490c" width={30} height={30} />
            ) : (
              <CaretDownIcon color="#b3490c" width={30} height={30} />
            )}
          </div>
        </div>
        {showAnswer && (
          <div>
            <h1 className="">{answer}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

const QnA = () => {
  return (
    <div className="flex flex-col lg:flex lg:flex-row lg:items-center w-full min-h-screen h-fit lg:h-screen bg-travelMate-white gap-10 p-5 lg:p-20">
      <div className="w-full lg:w-1/2">
        <div className="lg:w-[30vw] md:w-[400px] w-full h-fit lg:h-4/6 md:h-[400px] flex justify-center items-center bg-travelMate-cream rounded-[70px] p-10 lg:p-20">
          <div className="lg:h-[450px] w-full h-80 bg-white rounded-3xl flex flex-col justify-between">
            <div className="w-full p-4 flex flex-col gap-7">
              <div className="w-full flex items-center gap-5">
                <div>
                  <Image
                    className="w-16"
                    src="/images/ProfilePic.svg"
                    alt=""
                    width={150}
                    height={150}
                  />
                </div>
                <div className="flex flex-col">
                  <div>
                    <h1 className="font-semibold text-xl">Book Session</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">Select date & time</h1>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div className="w-16 h-16 border rounded-lg flex flex-col items-center justify-center">
                  <div>
                    <h1 className="text-xs text-gray-500">Fri</h1>
                  </div>
                  <div>
                    <h1 className="text-sm font-medium">29 Sep</h1>
                  </div>
                </div>
                <div className="w-16 h-16 border-2 border-black rounded-lg flex flex-col items-center justify-center">
                  <div>
                    <h1 className="text-xs text-gray-500">Sat</h1>
                  </div>
                  <div>
                    <h1 className="text-sm font-medium">30 Sep</h1>
                  </div>
                </div>
                <div className="w-16 h-16 border rounded-lg flex flex-col items-center justify-center">
                  <div>
                    <h1 className="text-xs text-gray-500">Sun</h1>
                  </div>
                  <div>
                    <h1 className="text-sm font-medium">31 Sep</h1>
                  </div>
                </div>
                <div className="w-16 h-16 border rounded-lg hidden md:flex flex-col items-center justify-center">
                  <div>
                    <h1 className="text-xs text-gray-500">Mon</h1>
                  </div>
                  <div>
                    <h1 className="text-sm font-medium">01 Oct</h1>
                  </div>
                </div>
                <div className="w-16 h-16 border rounded-lg hidden lg:flex flex-col items-center justify-center">
                  <div>
                    <h1 className="text-xs text-gray-500">Tue</h1>
                  </div>
                  <div>
                    <h1 className="text-sm font-medium">02 Oct</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-b-3xl w-full h-18 border-t flex flex-col gap-2 md:flex md:flex-row justify-between p-4">
              <div className="flex flex-col">
                <div>
                  <h1 className="text-xs text-gray-500">Next Available</h1>
                </div>
                <div>
                  <h1 className="font-bold">07:00pm, Tue 29th</h1>
                </div>
              </div>
              <div>
                <Button className="px-6 w-full md:w-fit">
                  <h1>Book</h1>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="w-full flex flex-col gap-10">
          <div className="w-full flex flex-col gap-10">
            {QuestionsAndAnswers.map((item, key) => (
              <FAQ key={key} question={item.question} answer={item.answer} index={key + 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnA;
