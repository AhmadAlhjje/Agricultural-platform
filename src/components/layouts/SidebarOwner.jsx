import { ListGroup } from "react-bootstrap";

const SidebarOwner = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: "userManagement", label: "إدارة المستخدمين" },
    { key: "productManagement", label: "إدارة المنتجات" },
    { key: "orderManagement", label: "إدارة الطلبات" },
    { key: "paymentManagement", label: "إدارة الدفع والمعاملات" },
    { key: "reportsAnalytics", label: "إدارة التقارير والتحليلات" },
    { key: "adsOffersManagement", label: "إدارة الإعلانات والعروض" },
    { key: "policiesComplaints", label: "إدارة سياسة الاستخدام والشكاوى" },
  ];

  return (
    <div className="bg-success text-white p-4 h-100 shadow-lg rounded-end">
      <h2 className="mb-4 text-warning fw-bold text-center">لوحة التحكم</h2>
      <ListGroup variant="flush">
        {tabs.map(({ key, label }) => (
          <ListGroup.Item
            key={key}
            action
            active={activeTab === key}
            onClick={() => setActiveTab(key)}
            className={`border-0 py-3 px-4 text-white fw-semibold rounded ${
              activeTab === key ? "bg-warning text-dark" : "bg-transparent"
            }`}
            style={{ transition: "0.3s", cursor: "pointer" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#28a745")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = activeTab === key ? "#ffc107" : "transparent")}
          >
            {label}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SidebarOwner;
