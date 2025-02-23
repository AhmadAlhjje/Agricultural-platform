// src/pages/ForgotPassword.js
import React, { useState } from "react";
import InputField from "../components/InputField";
import "./Login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("طلب إعادة تعيين كلمة المرور لـ:", email);
    // إرسال طلب إعادة التعيين إلى الخادم
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center mb-4">إعادة تعيين كلمة المرور</h2>
        <p className="text-center">
          أدخل بريدك الإلكتروني لإرسال رابط إعادة التعيين
        </p>
        <form onSubmit={handleSubmit}>
          <InputField
            label="البريد الإلكتروني"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
          />
          <button type="submit" className="btn btn-success w-100">
            إرسال رابط إعادة التعيين
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/login" className="text-success">العودة إلى تسجيل الدخول</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
