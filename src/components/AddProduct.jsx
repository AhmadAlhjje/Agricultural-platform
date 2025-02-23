import { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    unit: "",
    quantity: "",
    type: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="p-4 bg-light rounded shadow-sm">
      <h2 className="mb-4 text-success text-center">إضافة محصول جديد</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">اسم المحصول</label>
          <input type="text" name="name" className="form-control" value={product.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">وصف المحصول</label>
          <textarea name="description" className="form-control" value={product.description} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">السعر</label>
          <input type="number" name="price" className="form-control" value={product.price} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">الوحدة</label>
          <input type="text" name="unit" className="form-control" value={product.unit} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">الكمية المتاحة</label>
          <input type="number" name="quantity" className="form-control" value={product.quantity} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">نوع المحصول</label>
          <input type="text" name="type" className="form-control" value={product.type} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">رابط صورة المحصول</label>
          <input type="text" name="imageUrl" className="form-control" value={product.imageUrl} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success w-100">إضافة المحصول</button>
      </form>
    </div>
  );
};

export default AddProduct;