import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/layouts/Sidebar";
import Products from "../components/Products";
import AddProduct from "../components/AddProduct";
import AddOffers from "../components/addOffers";
import Orders from "../components/Orders";
import StatisticsDashboard from "../components/StatisticsDashboard";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("products");

  // كائن يحتوي على مكونات التبويبات المختلفة
  const tabComponents = {
    products: <Products />,
    addProduct: <AddProduct />,
    addOffers:<AddOffers />,
    orders: <Orders />,
    statisticsDashboard: <StatisticsDashboard />,
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        {/* Sidebar */}
        <Col md={3} lg={2}>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </Col>

        {/* Main Content */}
        <Col md={9} lg={10} className="bg-light p-4">
          {tabComponents[activeTab]}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
