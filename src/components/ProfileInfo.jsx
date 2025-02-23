import React, { useState } from 'react';
import { Card, ListGroup, Button, Form } from 'react-bootstrap';
import './ProfileInfo.css';

function ProfileInfo({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // يمكنك هنا إضافة وظيفة لحفظ البيانات الجديدة مثل استدعاء API
  };

  return (
    <Card className="profile-card">
      <Card.Body>
        {isEditing ? (
          <>
            <Form.Group>
              <Form.Label>الاسم</Form.Label>
              <Form.Control type="text" name="name" value={editedUser.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>رقم الهاتف</Form.Label>
              <Form.Control type="text" name="phone" value={editedUser.phone} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>العنوان</Form.Label>
              <Form.Control type="text" name="address" value={editedUser.address} onChange={handleChange} />
            </Form.Group>
            <Button variant="success" className="mt-3" onClick={handleSave}>حفظ</Button>
          </>
        ) : (
          <>
            <Card.Title className="profile-title">{editedUser.name}</Card.Title>
            <ListGroup variant="flush" className="profile-list">
              <ListGroup.Item className="profile-item"><strong>رقم الهاتف:</strong> {editedUser.phone}</ListGroup.Item>
              <ListGroup.Item className="profile-item"><strong>العنوان:</strong> {editedUser.address}</ListGroup.Item>
              <ListGroup.Item className="profile-item"><strong>الدور:</strong> {editedUser.role}</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" className="mt-3" onClick={() => setIsEditing(true)}>تعديل</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProfileInfo;
