import React, { useState } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  // المنتجات داخل السلة
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "حنطة",
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

  return (
    <div className="container mt-5">
      <h3 className="text-center text-success mb-4">🛒 سلة المشتريات</h3>
      
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
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h5 className="fw-bold">إجمالي السعر: <span className="text-danger">{totalAmount} ريال</span></h5>
              <button className="btn btn-primary w-100 mt-3">إتمام الشراء</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
