import React from "react";

export default function TestResult() {
  const results = {
    "سلامت روان": 4.2,
    "روابط زوجین": 3.9,
    "انگیزه‌سنجی": 4.6,
    "آمادگی خانواده": 4.8
  };

  const recommendation = {
    name: "سارا",
    age: "۵ ساله",
    gender: "دختر",
    traits: ["شاد", "سازگار", "فاقد سابقه تروما"],
    match: 92
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-2xl font-bold text-blue-800 mb-6">نتیجه آزمون فرزندپذیری</h1>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
          {Object.entries(results).map(([label, value]) => (
            <div key={label} className="bg-blue-100 rounded-xl p-4 shadow">
              <p className="font-semibold text-blue-800">{label}</p>
              <p className="text-xl font-bold">{value} از ۵</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-left">
          <h2 className="text-xl font-bold text-green-700 mb-2">پیشنهاد کودک مناسب:</h2>
          <div className="bg-green-50 p-4 rounded-xl shadow text-right">
            <p><strong>نام:</strong> {recommendation.name}</p>
            <p><strong>سن:</strong> {recommendation.age}</p>
            <p><strong>جنسیت:</strong> {recommendation.gender}</p>
            <p><strong>ویژگی‌ها:</strong> {recommendation.traits.join("، ")}</p>
            <p className="mt-2 text-green-700 font-semibold">درصد تطبیق: {recommendation.match}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
