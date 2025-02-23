import React from "react";

const CartItem = ({ product, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="card shadow-sm p-3 mb-3 border-0 rounded-3 cart-item">
      <div className="row align-items-center">
        {/* صورة المنتج */}
        <div className="col-md-2 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow-sm"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
        </div>

        {/* معلومات المنتج */}
        <div className="col-md-3">
          <h5 className="fw-bold text-success">{product.title}</h5>
          <p className="text-muted mb-1">{product.price} ريال / {product.unit}</p>
        </div>

        {/* تعديل الكمية */}
        <div className="col-md-3 d-flex align-items-center">
          <button
            className="btn btn-sm btn-outline-danger fw-bold px-3"
            onClick={() => onDecrease(product.id)}
          >-</button>
          <span className="mx-3 fw-bold">{product.quantity} {product.unit}</span>
          <button
            className="btn btn-sm btn-outline-success fw-bold px-3"
            onClick={() => onIncrease(product.id)}
          >+</button>
        </div>

        {/* السعر الإجمالي */}
        <div className="col-md-2 text-center fw-bold text-danger">
          {product.totalPrice} ريال
        </div>

        {/* زر الإزالة */}
        <div className="col-md-2 text-center">
          <button
            className="btn btn-outline-danger btn-sm rounded-pill px-3 fw-bold"
            onClick={() => onRemove(product.id)}
          >
            🗑 إزالة
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
