import { useState } from "react";
import ProductTable from "../../components/ProductManagement/ProductTable";

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "منتج 1", farmer: "أحمد", description: "وصف المنتج 1", status: "قيد المراجعة", isRejected: false, rejectionReason: "" },
    { id: 2, name: "منتج 2", farmer: "يوسف", description: "وصف المنتج 2", status: "مقبول", isRejected: false, rejectionReason: "" },
    { id: 3, name: "منتج 3", farmer: "مريم", description: "وصف المنتج 3", status: "مرفوض", isRejected: true, rejectionReason: "لا يتوافق مع سياسة الجودة" },
    { id: 4, name: "منتج 4", farmer: "فاطمة", description: "وصف المنتج 4", status: "قيد المراجعة", isRejected: false, rejectionReason: "" },
  ]);

  const [rejectionReason, setRejectionReason] = useState("");
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  const approveProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, status: "مقبول", isRejected: false } : product
      )
    );
  };

  const rejectProduct = (id) => {
    setShowRejectionModal(true);
    setCurrentProductId(id);
  };

  const saveRejectionReason = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === currentProductId
          ? { ...product, status: "مرفوض", isRejected: true, rejectionReason }
          : product
      )
    );
    setShowRejectionModal(false);
    setRejectionReason("");
  };

  const editProduct = (id, editedName, editedDescription) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, name: editedName, description: editedDescription }
          : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  return (
    <div className="col-md-12">
      <h3>إدارة المنتجات</h3>
      <ProductTable
        products={products}
        approveProduct={approveProduct}
        rejectProduct={rejectProduct}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
        showRejectionModal={showRejectionModal}
        setShowRejectionModal={setShowRejectionModal}
        rejectionReason={rejectionReason}
        setRejectionReason={setRejectionReason}
        saveRejectionReason={saveRejectionReason}
      />
    </div>
  );
};

export default ProductManagement;