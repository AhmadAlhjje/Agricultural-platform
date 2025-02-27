import React from "react";

const AllProducts = () => {
  // مصفوفة المنتجات التجريبية
  const products = [
    {
      id: 1,
      title: "خيار",
      description: "خيار عالي الجودة.",
      image: "/assets/R.png",
      farmer: "مزارع أحمد",
      price: "3500 ل.س / كيلو",
      quantity: "500 كيلو",
      category: "حبوب",
      rating: 4.5, //التقييم
    },
    {
      id: 2,
      title: "موز",
      description: "موز طبيعي طازج ومنتج محليًا.",
      image: "/assets/download.jpg",
      farmer: "مزارع سامي",
      price: "5000 ل.س / كرتونة",
      quantity: "200 كرتونة",
      category: "فواكه",
      rating: 4.8,
    },
    {
      id: 3,
      title: "تفاح",
      description: "تفاح أحمر لذيذ، طازج وصحي.",
      image: "/assets/R.png",
      farmer: "مزارع علي",
      price: "4000 ل.س / سلة",
      quantity: "150 سلة",
      category: "فواكه",
      rating: 4.2,
    },
  ];

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4" style={{ color: "#4CAF50" }}>
        جميع المنجات
      </h3>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card shadow-lg border-0 rounded">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <div
                className="card-body text-center"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <h5 className="card-title text-success fw-bold">
                  {product.title}
                </h5>
                <p className="text-muted">{product.farmer}</p> {/* اسم المزارع */}
                <p className="text-dark">{product.description}</p> {/* وصف المحصول */}
                <p className="fw-bold text-danger">{product.price}</p> {/* السعر */}
                <p className="fw-bold text-primary">
                  الكمية المتاحة: {product.quantity}
                </p>{" "}
                {/* الكمية المتاحة */}
                <p className="fw-bold text-secondary">
                  النوع: {product.category}
                </p>{" "}
                {/* نوع المحصول */}
                <div className="mb-2">
                  <span className="text-warning">
                    {/* عرض التقييمات */}
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        className={
                          index < Math.round(product.rating)
                            ? "bi bi-star-fill"
                            : "bi bi-star"
                        }
                      ></span>
                    ))}
                  </span>
                  <span className="text-muted"> ({product.rating})</span>
                </div>
                {/* أزرار إضافة إلى السلة أو شراء الآن */}
                <div>
                  <button className="btn btn-success me-2">
                    إضافة إلى السلة
                  </button>
                  <button className="btn btn-primary me-2">شراء الآن</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
