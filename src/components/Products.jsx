import { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "القمح", price: 50, unit: "لكل طن", quantity: 100 },
    { id: 2, name: "الأرز", price: 70, unit: "لكل كيلوجرام", quantity: 250 },
    { id: 3, name: "الشعير", price: 40, unit: "لكل سلة", quantity: 50 },
    { id: 4, name: "الذرة", price: 60, unit: "لكل كيس", quantity: 120 },
  ]);

  const [editId, setEditId] = useState(null);
  const [newPrice, setNewPrice] = useState("");
  const [newUnit, setNewUnit] = useState("");
  const [newQuantity, setNewQuantity] = useState("");

  // تفعيل وضع التعديل للسعر
  const handleEditPrice = (id) => {
    const product = products.find((p) => p.id === id);
    setNewPrice(product.price);
    setNewUnit(product.unit);
    setEditId({ type: "price", id });
  };

  // تفعيل وضع التعديل للكمية
  const handleEditQuantity = (id) => {
    const product = products.find((p) => p.id === id);
    setNewQuantity(product.quantity);
    setEditId({ type: "quantity", id });
  };

  // حفظ التعديلات
  const handleSave = () => {
    setProducts(
      products.map((product) =>
        product.id === editId.id
          ? editId.type === "price"
            ? { ...product, price: Number(newPrice), unit: newUnit }
            : { ...product, quantity: Number(newQuantity) }
          : product
      )
    );
    setEditId(null);
    setNewPrice("");
    setNewUnit("");
    setNewQuantity("");
  };

  // حذف المنتج
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-success fw-bold">إدارة المنتجات</h2>
      <Table striped bordered hover responsive>
        <thead className="bg-success text-white">
          <tr className="text-center">
            <th>#</th>
            <th>اسم المحصول</th>
            <th>السعر</th>
            <th>الكمية المتبقية</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="text-center align-middle">
              <td>{index + 1}</td>
              <td>{product.name}</td>

              {/* تعديل السعر */}
              <td>
                {editId?.id === product.id && editId?.type === "price" ? (
                  <div className="d-flex align-items-center gap-2">
                    <Form.Control
                      type="number"
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                      className="w-50"
                    />
                    <Form.Select
                      value={newUnit}
                      onChange={(e) => setNewUnit(e.target.value)}
                      className="w-50"
                    >
                      <option value="لكل كيلوجرام">لكل كيلوجرام</option>
                      <option value="لكل طن">لكل طن</option>
                      <option value="لكل سلة">لكل سلة</option>
                      <option value="لكل كيس">لكل كيس</option>
                    </Form.Select>
                  </div>
                ) : (
                  `${product.price} $ ${product.unit}`
                )}
              </td>

              {/* تعديل الكمية */}
              <td>
                {editId?.id === product.id && editId?.type === "quantity" ? (
                  <Form.Control
                    type="number"
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(e.target.value)}
                    className="w-50 mx-auto"
                  />
                ) : (
                  `${product.quantity} ${product.unit.split(" ")[1]}`
                )}
              </td>

              <td>
                <div className="d-flex justify-content-center gap-2 flex-wrap">
                  {editId?.id === product.id ? (
                    <Button variant="success" size="sm" onClick={handleSave}>
                      حفظ
                    </Button>
                  ) : (
                    <>
                      <Button variant="warning" size="sm" onClick={() => handleEditPrice(product.id)}>
                        تعديل السعر
                      </Button>
                      <Button className="btn-success" size="sm" onClick={() => handleEditQuantity(product.id)}>
                        تعديل الكمية
                      </Button>
                    </>
                  )}
                  <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>
                    حذف
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
