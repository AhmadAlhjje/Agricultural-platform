import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">المزارع: {product.farm}</p>
        <p className="card-text">السعر: {product.price} ريال / كجم</p>
        <p className="card-text">التقييم: {product.rating} ⭐</p>
        <button className="btn btn-success">إضافة إلى السلة</button>
        <button className="btn btn-warning ms-2">شراء الآن</button>
      </div>
    </div>
  );
};

export default ProductCard;
