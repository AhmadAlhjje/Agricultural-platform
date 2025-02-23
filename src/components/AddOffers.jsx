import { useState } from "react";

const AddOffers = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "طماطم", price: 10, unit: "كجم", discount: null },
    { id: 2, name: "خيار", price: 8, unit: "كجم", discount: null },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [offer, setOffer] = useState({ discount: "", startDate: "", endDate: "" });

  const handleOfferChange = (e) => {
    const { name, value } = e.target;
    setOffer({ ...offer, [name]: value });
  };

  const applyOffer = () => {
    if (new Date(offer.endDate) <= new Date(offer.startDate)) {
      alert("تاريخ الانتهاء يجب أن يكون بعد تاريخ البدء");
      return;
    }
    setProducts(products.map(product =>
      product.id === selectedProduct.id ? { ...product, discount: offer } : product
    ));
    setSelectedProduct(null);
    setOffer({ discount: "", startDate: "", endDate: "" });
  };

  return (
    <div className="p-4 bg-light rounded shadow-sm">
      <h2 className="mb-4 text-success text-center">إضافة عرض</h2>
      <div className="mb-3">
        <label className="form-label">اختر المنتج</label>
        <select 
          className="form-select"
          onChange={(e) => {
            const product = products.find(p => p.id === parseInt(e.target.value));
            setSelectedProduct(product);
          }}
        >
          <option value="">اختر المنتج</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>{product.name}</option>
          ))}
        </select>
      </div>

      {selectedProduct && (
        <div className="p-3 border rounded bg-white">
          <h4 className="mb-3 text-center">إضافة عرض لـ {selectedProduct.name}</h4>
          <p><strong>السعر الحالي:</strong> {selectedProduct.price} {selectedProduct.unit}</p>
          <div className="mb-2">
            <label className="form-label">نسبة الخصم (%)</label>
            <input type="number" name="discount" className="form-control" value={offer.discount} onChange={handleOfferChange} />
          </div>
          <div className="mb-2">
            <label className="form-label">تاريخ بدء العرض</label>
            <input type="date" name="startDate" className="form-control" value={offer.startDate} onChange={handleOfferChange} />
          </div>
          <div className="mb-2">
            <label className="form-label">تاريخ انتهاء العرض</label>
            <input type="date" name="endDate" className="form-control" value={offer.endDate} onChange={handleOfferChange} />
          </div>
          <button className="btn btn-warning w-100 mb-2" onClick={applyOffer}>إضافة الخصم</button>
        </div>
      )}

      <h2 className="mt-4 text-success text-center">المنتجات مع العروض</h2>
      <table className="table table-bordered text-center">
        <thead className="table-success">
          <tr>
            <th>اسم المنتج</th>
            <th>السعر مع الوحدة</th>
            <th>السعر بعد الخصم</th>
            <th>نسبة الخصم</th>
            <th>تاريخ بدء العرض</th>
            <th>تاريخ انتهاء العرض</th>
          </tr>
        </thead>
        <tbody>
          {products.filter(product => product.discount).map(product => {
            const discountedPrice = (product.price * (1 - product.discount.discount / 100)).toFixed(2);
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price} {product.unit}</td>
                <td>{discountedPrice} {product.unit}</td>
                <td>{`${product.discount.discount}%`}</td>
                <td>{product.discount.startDate}</td>
                <td>{product.discount.endDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AddOffers;
