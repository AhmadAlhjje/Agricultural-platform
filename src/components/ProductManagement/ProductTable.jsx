// المكون الرئيسي الذي يعرض جدول المنتجات.
import ProductRow from "./ProductRow";
import RejectionModal from "./RejectionModal";

const ProductTable = ({
  products,
  approveProduct,
  rejectProduct,
  editProduct,
  deleteProduct,
  showRejectionModal,
  setShowRejectionModal,
  rejectionReason,
  setRejectionReason,
  saveRejectionReason,
}) => {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>اسم المنتج</th>
            <th>اسم المزارع</th>
            <th>وصف المنتج</th>
            <th>حالة المنتج</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              approveProduct={approveProduct}
              rejectProduct={rejectProduct}
              editProduct={editProduct}
              deleteProduct={deleteProduct}
            />
          ))}
        </tbody>
      </table>

      {showRejectionModal && (
        <RejectionModal
          setShowRejectionModal={setShowRejectionModal}
          rejectionReason={rejectionReason}
          setRejectionReason={setRejectionReason}
          saveRejectionReason={saveRejectionReason}
        />
      )}
    </>
  );
};

export default ProductTable;