// import React, { useState } from "react";
// import "./ManageProducts.css";

// const ManageProducts = () => {
//   const [products, setProducts] = useState([
//     { id: 1, name: "تفاح", price: 10, quantity: 50 },
//     { id: 2, name: "برتقال", price: 8, quantity: 40 }
//   ]);

//   const handleDelete = (id) => {
//     setProducts(products.filter(product => product.id !== id));
//   };

//   return (
//     <div className="manage-products">
//       <h2>إدارة المنتجات</h2>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             {product.name} - {product.price} دولار - الكمية: {product.quantity}
//             <button onClick={() => handleDelete(product.id)}>حذف</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ManageProducts;
