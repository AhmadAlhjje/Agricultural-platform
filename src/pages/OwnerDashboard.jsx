import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserManagement from "./OwnerDashboard/UserManagement";
import ProductManagement from "./OwnerDashboard/ProductManagement";
import OrderManagement from "./OwnerDashboard/OrderManagement";
import PaymentManagement from "./OwnerDashboard/PaymentManagement";
import ReportsAnalytics from "./OwnerDashboard/ReportsAnalytics";
import AdsOffersManagement from "./OwnerDashboard/AdsOffersManagement";
import PoliciesComplaints from "./OwnerDashboard/PoliciesComplaints";
import SidebarOwner from "../components/layouts/SidebarOwner";

const OwnerDashboard = () => {
  const [activeTab, setActiveTab] = useState("userManagement");

  const sections = {
    userManagement: <UserManagement />,
    productManagement: <ProductManagement />,
    orderManagement: <OrderManagement />,
    paymentManagement: <PaymentManagement />,
    reportsAnalytics: <ReportsAnalytics />,
    adsOffersManagement: <AdsOffersManagement />,
    policiesComplaints: <PoliciesComplaints />,
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        {/* SidebarOwner */}
        <Col md={3} lg={2}>
          <SidebarOwner activeTab={activeTab} setActiveTab={setActiveTab} />
        </Col>

        {/* Main Content */}
        <Col md={9} lg={10} className="bg-light p-4">
          {sections[activeTab]}
        </Col>
      </Row>
    </Container>
  );
};

export default OwnerDashboard;
