import React from "react";

export default function Welcome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 text-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-xl w-full">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">به پرباز خوش آمدید</h1>
        <p className="text-gray-700 text-lg mb-6">
          این اپلیکیشن برای همراهی شما در مسیر فرزندپذیری طراحی شده است.
        </p>
        <a href="/login">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
            ورود یا ثبت‌نام
          </button>
        </a>
      </div>
    </div>
  );
}
