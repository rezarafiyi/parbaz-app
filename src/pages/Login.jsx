import React, { useState } from "react";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const handleSendOtp = () => {
    setStep(2);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">ورود به پرباز</h1>
        {step === 1 ? (
          <>
            <input
              type="tel"
              placeholder="شماره موبایل"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 mb-4 border rounded-xl text-right"
            />
            <button
              onClick={handleSendOtp}
              className="w-full bg-blue-600 text-white p-3 rounded-xl"
            >
              ارسال کد تأیید
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="کد تأیید"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 mb-4 border rounded-xl text-center tracking-widest"
            />
            <button className="w-full bg-green-600 text-white p-3 rounded-xl">
              ورود
            </button>
          </>
        )}
      </div>
    </div>
  );
}
