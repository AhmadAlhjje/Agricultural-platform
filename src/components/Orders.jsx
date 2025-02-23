import { useState } from "react";

const AddProduct = () => {
  const [orders, setOrders] = useState([
    { id: 1, productName: "طماطم", quantity: 5, status: "معلق" },
    { id: 2, productName: "خيار", quantity: 3, status: "معلق" },
  ]);

  const handleOrderStatus = (orderId, status) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status } : order
    ));
  };

  return (
    <div className="p-4 bg-light rounded shadow-sm">
      <h2 className="mb-4 text-primary text-center">الطلبات الواردة</h2>
      <table className="table table-bordered text-center">
        <thead className="table-info">
          <tr>
            <th>اسم المنتج</th>
            <th>الكمية المطلوبة</th>
            <th>حالة الطلب</th>
            <th>إجراء</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
              <td>
                {order.status === "معلق" && (
                  <div className="d-flex flex-column gap-2">
                    <button className="btn btn-success btn-sm" onClick={() => handleOrderStatus(order.id, "مقبول")}>قبول</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleOrderStatus(order.id, "مرفوض")}>إلغاء</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddProduct;