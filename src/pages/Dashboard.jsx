import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-xl w-full text-center">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">داشبورد پرباز</h1>
        <p className="text-gray-700 mb-6">به داشبورد خوش آمدید. از اینجا می‌توانید آزمون را آغاز کنید یا نتایج خود را مشاهده نمایید.</p>
        <div className="flex flex-col gap-4">
          <Link to="/test">
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">شروع آزمون</button>
          </Link>
          <Link to="/result">
            <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700">مشاهده نتیجه</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
