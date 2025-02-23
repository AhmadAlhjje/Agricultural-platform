import React, { useState } from "react";
import { FaFilter, FaLeaf, FaDollarSign, FaStar, FaSearch, FaMapMarkerAlt } from "react-icons/fa";

// تعريف المكون الرئيسي
const ProductFilterAndSearch = ({ onFilterChange, onSortChange }) => {
  // تعريف حالة (state) لحفظ نص البحث
  const [searchTerm, setSearchTerm] = useState("");
  
  // تعريف حالة (state) لحفظ الفلاتر المختارة
  const [filters, setFilters] = useState({
    type: "", // نوع المحصول
    price: "", // السعر
    rating: "", // التقييم
    city: "", // المدينة
    area: "", // المنطقة
  });

  // تابع لتحديث نص البحث عند تغيير قيمة حقل البحث
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // تابع لتحديث الفلاتر عند تغيير قيمة أي فلتر
  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  // تابع لتطبيق الفلاتر المختارة
  const handleApplyFilters = () => {
    Object.keys(filters).forEach((key) => onFilterChange(key, filters[key]));
  };

  // تابع لإرسال البيانات المختارة إلى الـ API
  const handleSubmit = async () => {
    // تجميع البيانات المراد إرسالها
    const dataToSend = {
      searchTerm, // نص البحث
      ...filters, // الفلاتر المختارة
    };

    try {
      // إرسال طلب POST إلى الـ API
      const response = await fetch("https://example.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // تحديد نوع البيانات كـ JSON
        },
        body: JSON.stringify(dataToSend), // تحويل البيانات إلى JSON
      });

      // التحقق من نجاح الطلب
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // تحويل الاستجابة إلى JSON
      const result = await response.json();
      console.log("Success:", result);
      alert("تم إرسال البيانات بنجاح!");
    } catch (error) {
      // معالجة الأخطاء
      console.error("Error:", error);
      alert("حدث خطأ أثناء إرسال البيانات.");
    }
  };

  // واجهة المستخدم
  return (
    <div className="container mt-4">
      {/* شريط البحث */}
      <div className="search-bar mb-4">
        <div className="input-group">
          {/* زر البحث */}
          <button className="btn btn-success" onClick={() => onFilterChange("search", searchTerm)}>
            <FaSearch />
          </button>
          {/* حقل إدخال نص البحث */}
          <input
            type="text"
            className="form-control"
            placeholder="ابحث عن المحاصيل المتاحة..."
            value={searchTerm}
            onChange={handleSearchChange} // تحديث نص البحث عند التغيير
          />
        </div>
      </div>

      {/* قسم الفلاتر */}
      <div className="filter-section bg-light p-3 rounded shadow-sm mb-4">
        <h5 className="text-success d-flex align-items-center">
          <FaFilter className="me-2" /> فلترة المنتجات
        </h5>
        <div className="d-flex flex-wrap gap-3">
          {/* فلتر النوع */}
          <div className="filter-group d-flex align-items-center">
            <FaLeaf className="me-2 text-success" />
            <label className="form-label mb-0">النوع:</label>
            <select
              className="form-select ms-2"
              onChange={(e) => handleFilterChange("type", e.target.value)} // تحديث فلتر النوع
            >
              <option value="">اختر النوع</option>
              <option value="فواكه">فواكه</option>
              <option value="خضروات">خضروات</option>
            </select>
          </div>

          {/* فلتر السعر */}
          <div className="filter-group d-flex align-items-center">
            <FaDollarSign className="me-2 text-warning" />
            <label className="form-label mb-0">السعر:</label>
            <select
              className="form-select ms-2"
              onChange={(e) => handleFilterChange("price", e.target.value)} // تحديث فلتر السعر
            >
              <option value="">اختر السعر</option>
              <option value="asc">الأقل سعرًا</option>
              <option value="desc">الأعلى سعرًا</option>
            </select>
          </div>

          {/* فلتر التقييمات */}
          <div className="filter-group d-flex align-items-center">
            <FaStar className="me-2 text-warning" />
            <label className="form-label mb-0">التقييمات:</label>
            <select
              className="form-select ms-2"
              onChange={(e) => handleFilterChange("rating", e.target.value)} // تحديث فلتر التقييم
            >
              <option value="">اختر التقييم</option>
              <option value="high">أعلى تقييم</option>
              <option value="low">أقل تقييم</option>
            </select>
          </div>

          {/* فلتر المدينة */}
          <div className="filter-group d-flex align-items-center">
            <FaMapMarkerAlt className="me-2 text-danger" />
            <label className="form-label mb-0">المدينة:</label>
            <select
              className="form-select ms-2"
              onChange={(e) => handleFilterChange("city", e.target.value)} // تحديث فلتر المدينة
            >
              <option value="">اختر المدينة</option>
              <option value="الرياض">الرياض</option>
              <option value="جدة">جدة</option>
              <option value="الدمام">الدمام</option>
            </select>
          </div>

          {/* فلتر المنطقة */}
          <div className="filter-group d-flex align-items-center">
            <FaMapMarkerAlt className="me-2 text-primary" />
            <label className="form-label mb-0">المنطقة:</label>
            <select
              className="form-select ms-2"
              onChange={(e) => handleFilterChange("area", e.target.value)} // تحديث فلتر المنطقة
            >
              <option value="">اختر المنطقة</option>
              <option value="الشمالية">الشمالية</option>
              <option value="الشرقية">الشرقية</option>
              <option value="الغربية">الغربية</option>
            </select>
          </div>
        </div>
        {/* زر تطبيق الفلاتر */}
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={handleSubmit}>بحث</button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterAndSearch;