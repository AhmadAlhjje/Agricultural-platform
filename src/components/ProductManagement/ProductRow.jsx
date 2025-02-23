// مكون يعرض صفًا واحدًا من المنتج
import { useState } from "react";
import ApproveRejectButtons from "./ApproveRejectButtons";
import EditDeleteButtons from "./EditDeleteButtons";

const ProductRow = ({ product, approveProduct, rejectProduct, editProduct, deleteProduct }) => {
  const [editableProduct, setEditableProduct] = useState(null);
  const [editedName, setEditedName] = useState(product.name);
  const [editedDescription, setEditedDescription] = useState(product.description);

  return (
    <tr>
      <td>
        {editableProduct === product.id ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="form-control"
          />
        ) : (
          product.name
        )}
      </td>
      <td>{product.farmer}</td>
      <td>
        {editableProduct === product.id ? (
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="form-control"
          />
        ) : (
          product.description
        )}
      </td>
      <td>
        <span
          className={`fw-bold ${
            product.status === "مقبول"
              ? "text-success"
              : product.status === "مرفوض"
              ? "text-danger"
              : "text-warning"
          }`}
        >
          {product.status}
        </span>
        {product.isRejected && (
          <div className="text-danger mt-2">
            <strong>سبب الرفض: </strong> {product.rejectionReason}
          </div>
        )}
      </td>
      <td>
        {product.status === "قيد المراجعة" && editableProduct !== product.id && (
          <ApproveRejectButtons
            product={product}
            approveProduct={approveProduct}
            rejectProduct={rejectProduct}
          />
        )}

        {editableProduct === product.id && (
          <div className="d-flex justify-content-between w-100 mb-3">
            <button
              className="btn btn-success w-48"
              onClick={() => {
                editProduct(product.id, editedName, editedDescription);
                setEditableProduct(null);
              }}
            >
              حفظ
            </button>
          </div>
        )}

        {product.status === "مقبول" && editableProduct !== product.id && (
          <EditDeleteButtons
            product={product}
            deleteProduct={deleteProduct}
            setEditableProduct={setEditableProduct}
            setEditedName={setEditedName}
            setEditedDescription={setEditedDescription}
          />
        )}

        {product.isRejected && (
          <div className="d-flex justify-content-between w-100 mb-3">
            <button
              className="btn btn-danger w-48"
              onClick={() => deleteProduct(product.id)}
            >
              حذف
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default ProductRow;