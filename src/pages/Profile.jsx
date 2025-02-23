import React from 'react';
import ProfileInfo from '../components/ProfileInfo';
import { Container, Row, Col } from 'react-bootstrap';
import './Profile.css'; // استيراد التنسيقات الخاصة بالصفحة

function Profile() {
  const user = {
    name: 'أحمد العجارمة',
    phone: '0912345678',
    address: 'سوريا , حلب',
    role: 'مزارع',
  };

  return (
    <Container className="profile-container">
      <Row>
        <Col>
          <h1 className="profile-title">ملف المستخدم</h1>
          <ProfileInfo user={user} />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
