// src/pages/Register.js
import React, { useState } from "react";
import InputField from "../components/InputField";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "مزارع",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("بيانات التسجيل:", formData);
    // يمكنك إرسال البيانات إلى الخادم هنا
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="text-center mb-4">تسجيل جديد - منصة زراعي</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="الاسم الكامل"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="أدخل اسمك"
          />
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
          <InputField
            label="رقم الهاتف"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="مثال: 0912345678"
          />
          <InputField
            label="العنوان"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="أدخل عنوانك"
          />
          
          <div className="mb-3">
            <label className="form-label">الدور</label>
            <select
              className="form-select"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="مزارع">مزارع</option>
              <option value="مشتري">مشتري</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success w-100">
            تسجيل
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
