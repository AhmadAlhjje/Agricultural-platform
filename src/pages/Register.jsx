import React, { useState } from "react";
import InputField from "../components/InputField";
import Select from "react-select";
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
  const roleOptions = [
    { value: "مزارع", label: "🌿 مزارع" },
    { value: "مشتري", label: "🛒 مشتري" }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("بيانات التسجيل:", formData);
    // يمكنك إرسال البيانات إلى الخادم هنا
  };

  return (
    <div id="register-page">
      <h1 className="text-center" style={{ fontFamily: "'Tajawal', sans-serif", fontSize: "2.5rem", color: "#28a745", fontWeight: "bold",marginBottom:"40px" }}>
          منصة زراعي
      </h1>
    <div className="register-container" >
      <div className="register-card rounded-5 p-5" style={{ maxWidth: "700px", width: "100%", borderRadius: "10px", backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
        <h2 className="text-center" style={{marginBottom: "60px" ,}}> تسجيل جديد</h2>
        <form onSubmit={handleSubmit} className="row g-4">
          <div className="col-md-6">
            <InputField
              label="الاسم الكامل"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="أدخل اسمك"
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
              label="العنوان"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="أدخل عنوانك"
            />
          </div>
          <div className="col-md-6">
            <InputField
              label="البريد الإلكتروني"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
            />
            <InputField
              label="رقم الهاتف"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="مثال: 0912345678"
            />
            <div className="mb-3">
              <label className="form-label">الدور</label>
              <Select
                className="custom-react-select"
                options={roleOptions}
                value={roleOptions.find(option => option.value === formData.role)}
                onChange={(selectedOption) =>
                  setFormData({ ...formData, role: selectedOption.value })
                }
              />
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <button 
              type="submit" 
              className="btn btn-success w-50 mt-3 py-2 rounded-4"
            >
              تسجيل
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Register;
