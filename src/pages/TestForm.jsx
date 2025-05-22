import React, { useState } from "react";

const questions = [
  "من آمادگی پذیرش مسئولیت تربیت کودک را دارم.",
  "رابطه من و همسرم با ثبات و سالم است.",
  "احساس می‌کنم نیاز دارم به کودکی عشق بورزم.",
  "اگر فرزندی در خانواده‌ام وجود داشته باشد، او با فرزندخوانده کنار می‌آید."
];

export default function TestForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(3));

  const handleAnswer = (value) => {
    const newAnswers = [...answers];
    newAnswers[step] = value;
    setAnswers(newAnswers);
    setStep((prev) => Math.min(prev + 1, questions.length - 1));
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="bg-gray-100 p-8 rounded-2xl shadow-xl max-w-xl w-full text-center">
        <h1 className="text-xl font-bold mb-4 text-blue-800">سوال {step + 1} از {questions.length}</h1>
        <p className="mb-6 text-gray-800">{questions[step]}</p>
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((v) => (
            <button key={v} onClick={() => handleAnswer(v)} className="bg-blue-500 text-white px-4 py-2 rounded-xl">
              {v}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
