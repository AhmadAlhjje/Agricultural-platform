import React from "react";

const Statistics = () => {
  const stats = [
    { title: "المزارعين المسجلين", value: 350 },
    { title: "عدد المنتجات", value: 1250 },
    { title: "عدد عمليات البيع", value: 5000 },
  ];

  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4">إحصائيات المنصة</h2>
      <div className="row">
        {stats.map((stat, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-center shadow-sm p-4">
              <h5 className="card-title">{stat.title}</h5>
              <p className="display-4 fw-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;