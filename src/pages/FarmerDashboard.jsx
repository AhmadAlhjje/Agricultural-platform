// src/pages/FarmerDashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FarmerDashboard = () => {
  const [farm, setFarm] = useState({
    name: 'Farm 1',
    owner: 'Owner 1',
    location: 'Location 1',
    area: '50 acres',
    crops: ['Wheat', 'Rice', 'Corn'],
    reports: [
      { date: '2025-01-15', report: 'Watering schedule completed' },
      { date: '2025-01-20', report: 'Harvesting started for Wheat' }
    ]
  });

  const [newReport, setNewReport] = useState('');

  // دالة لإضافة تقرير جديد
  const addReport = () => {
    setFarm({
      ...farm,
      reports: [...farm.reports, { date: new Date().toLocaleDateString(), report: newReport }]
    });
    setNewReport('');
  };

  return (
    <div className="container">
      <h1 className="my-4">لوحة تحكم المزارع</h1>

      <div className="farm-info mb-4">
        <h2>معلومات المزرعة</h2>
        <p><strong>الاسم:</strong> {farm.name}</p>
        <p><strong>المالك:</strong> {farm.owner}</p>
        <p><strong>الموقع:</strong> {farm.location}</p>
        <p><strong>المساحة:</strong> {farm.area}</p>
      </div>

      <div className="crops mb-4">
        <h2>الزراعات الحالية</h2>
        <ul className="list-group">
          {farm.crops.map((crop, index) => (
            <li className="list-group-item" key={index}>{crop}</li>
          ))}
        </ul>
      </div>

      <div className="reports mb-4">
        <h2>التقارير</h2>
        <ul className="list-group">
          {farm.reports.map((report, index) => (
            <li className="list-group-item" key={index}>
              <strong>{report.date}:</strong> {report.report}
            </li>
          ))}
        </ul>

        <div className="add-report mt-4">
          <h3>إضافة تقرير جديد</h3>
          <textarea
            className="form-control mb-3"
            value={newReport}
            onChange={(e) => setNewReport(e.target.value)}
            placeholder="أضف تقريرًا هنا"
          />
          <button className="btn btn-primary" onClick={addReport}>إضافة التقرير</button>
        </div>
      </div>

      <div className="farmer-actions mb-4">
        <h2>إجراءات المزارع</h2>
        <ul className="list-group">
          <li className="list-group-item"><Link to="/market" className="text-decoration-none">عرض السوق</Link></li>
          <li className="list-group-item"><Link to="/orders" className="text-decoration-none">إدارة الطلبات</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default FarmerDashboard;
