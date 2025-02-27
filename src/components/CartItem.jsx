import React from "react";


const CartItem = ({ product, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="d-flex align-items-center justify-content-between border border-dark rounded-3 p-4 shadow-sm mb-3 position-relative" style={{ backgroundColor: "#fff" }}>
      {/* الخط الفاصل من الأول للآخر */}
      <div className="position-absolute top-0 bottom-0 end-0 border-start border-9 border-dark" style={{ right: "20px" }}></div>
      
      {/* صورة المنتج */}
      <img
        src={product.image}
        alt={product.title}
        className="rounded"
        style={{ width: "50px", height: "50px", objectFit: "cover" }}
      />
      
      {/* اسم المنتج */}
      <span className="text-success fw-bold">{product.title}</span>
      
      {/* السعر الإجمالي */}
      <span className="text-muted">{product.price} ل.س</span>
      
      {/* تعديل الكمية */}
      <div className="d-flex align-items-center">
      <button
          className="btn btn-light btn-sm border rounded px-3 fw-bold mx-1"
          onClick={() => onDecrease(product.id)}
          style={{ backgroundColor: "#e0e0e0" }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#bdbdbd"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#e0e0e0"}
        >-</button>
        <span className="mx-2 fw-bold">{product.quantity}</span>
      <button
          className="btn btn-sm border rounded px-3 fw-bold mx-1"
          onClick={() => onIncrease(product.id)}
          style={{ backgroundColor: "#b2df8a" }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#8bc34a"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#b2df8a"}
        >+</button>
      </div>
      
      {/* السعر */}
      <span className="text-danger fw-bold">{product.totalPrice} ل.س</span>
      
      {/* الخط الفاصل قبل سلة المهملات */}
      <div className="border-start border-dark" style={{ height: "30px" }}></div>
      
      {/* زر الحذف بأيقونة SVG */}
      <button
        className="btn d-flex align-items-center justify-content-center"
        onClick={() => onRemove(product.id)}
        style={{ background: "none", border: "none" }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h16M7 6V4a2 2 0 012-2h6a2 2 0 012 2v2M9 10v6m3-6v6m3-6v6M5 6h14l-1 14H6L5 6z" 
            stroke="#d32f2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
            onMouseOver={(e) => e.currentTarget.setAttribute('stroke', '#b71c1c')}
            onMouseOut={(e) => e.currentTarget.setAttribute('stroke', '#d32f2f')}
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;