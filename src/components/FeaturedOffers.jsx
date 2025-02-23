import React from "react";

// قسم العروض المميزة
const FeaturedOffers = () => {
  const offers = [
    {
      id: 1,
      title: "حنطة",
      image: "/assets/R.png",
      farmer: "مزارع أحمد",
      price: "35 ريال / كيلو",
      discount: 10, // نسبة الخصم
      startDate: "2025-02-10", // تاريخ بدء العرض
      endDate: "2025-02-20", // تاريخ انتهاء العرض
      rating: 4.5,
    },
    {
      id: 2,
      title: "موز",
      image: "/assets/download.jpg",
      farmer: "مزارع سامي",
      price: "50 ريال / كرتونة",
      discount: 15, // نسبة الخصم
      startDate: "2025-02-15", // تاريخ بدء العرض
      endDate: "2025-02-25", // تاريخ انتهاء العرض
      rating: 4.8,
    },
    {
      id: 3,
      title: "تفاح",
      image: "/assets/download.jpg",
      farmer: "مزارع علي",
      price: "40 ريال / سلة",
      discount: 5, // نسبة الخصم
      startDate: "2025-02-12", // تاريخ بدء العرض
      endDate: "2025-02-22", // تاريخ انتهاء العرض
      rating: 4.2,
    },
  ];

  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4">العروض المميزة</h2>
      <div className="row">
        {offers.map((offer) => (
          <div key={offer.id} className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src={offer.image}
                className="card-img-top"
                alt={offer.title}
                style={{ height: "200px", objectFit: "cover"}}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{offer.title}</h5>
                <p className="text-muted">{offer.farmer}</p>
                <p className="fw-bold">
                  {offer.price} <span className="text-danger">({offer.discount}% خصم)</span>
                </p>
                <p className="text-muted">
                  <small>
                    من {offer.startDate} إلى {offer.endDate}
                  </small>
                </p>
                <div className="mb-2">
                  <span className="text-warning">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        className={index < offer.rating ? "bi bi-star-fill" : "bi bi-star"}
                      ></span>
                    ))}
                  </span>
                  <span> ({offer.rating})</span>
                </div>
                <button className="btn btn-success me-2">إضافة إلى السلة</button>
                <button className="btn btn-primary me-2">شراء الآن</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedOffers;
