import React, { useState } from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  // المنتجات داخل السلة
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "خيار",
      image: "/assets/R.png",
      price: 35,
      unit: "كيلو",
      quantity: 2,
      totalPrice: 70,
    },
    {
      id: 2,
      title: "موز",
      image: "/assets/download.jpg",
      price: 50,
      unit: "كرتونة",
      quantity: 1,
      totalPrice: 50,
    },
    {
      id: 3,
      title: "تفاح",
      image: "/assets/R.png",
      price: 40,
      unit: "سلة",
      quantity: 3,
      totalPrice: 120,
    },
  ]);

  // دالة زيادة الكمية
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1, totalPrice: (product.quantity + 1) * product.price }
          : product
      )
    );
  };

  // دالة تقليل الكمية
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1, totalPrice: (product.quantity - 1) * product.price }
          : product
      )
    );
  };

  // دالة إزالة المنتج
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  // حساب المجموع الكلي
  const totalAmount = cart.reduce((acc, product) => acc + product.totalPrice, 0);
  
  // تحديد رسوم التوصيل
  const deliveryFee = totalAmount > 0 ? 15 : 0;

  return (
    <div className="container mt-5">
      <h3 className="text-end text-success mb-4">🛒 سلة المشتريات</h3>

      {cart.length === 0 ? (
        <p className="text-center text-muted">السلة فارغة!</p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cart.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>
          <div className="col-md-3 me-4 ">
          <div >
            <div className="card p-3 shadow">
              <h5 className="fw-bold text-center mb-3">🛒 إجمالي سلة المشتريات</h5>

              <div className="d-flex justify-content-between">
                <span className="fw-bold">المجموع:</span>
                <span className="fw-bold">{totalAmount} ل.س</span>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <span className="fw-bold text-danger fw-bold">رسوم التوصيل:</span>
                <span className="text-danger fw-bold">{deliveryFee} ل.س</span>
              </div>

              <hr className="my-3" />

              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">الإجمالي:</span>
                <span className=" fw-bold">{totalAmount + deliveryFee} ل.س</span>
              </div>

              <button className="btn btn-success btn-sm w-100 mt-4 rounded-5 pt-2 pb-2">
                إتمام الشراء
              </button>
            </div>
          </div>
          <Link className="" to="/">
              <button className="btn btn-success btn-sm w-75 mt-4 rounded-5 pt-2 pb-2 fs-6" style={{margin:40}}>
                العودة الى المتجر
              </button>
          </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
