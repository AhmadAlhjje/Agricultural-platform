// src/pages/Login.js
import React, { useState } from "react";
import InputField from "../components/InputField";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("بيانات تسجيل الدخول:", formData);
    // يمكنك إرسال البيانات إلى الخادم هنا
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center mb-4">تسجيل الدخول - منصة زراعي</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="البريد الإلكتروني"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
          />
          <InputField
            label="كلمة المرور"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
          />

          <div className="d-flex justify-content-between align-items-center mb-3">
            <a href="/forgot-password" className="text-success forgot-password">
              هل نسيت كلمة السر؟
            </a>
          </div>

          <button type="submit" className="btn btn-success w-100">
            تسجيل الدخول
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/register" className="text-success">إنشاء حساب جديد</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
