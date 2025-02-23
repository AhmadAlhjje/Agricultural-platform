// مكون يحتوي على أزرار القبول والرفض.
const ApproveRejectButtons = ({ product, approveProduct, rejectProduct }) => {
    return (
      <div className="d-flex justify-content-between w-100 mb-3">
        <button
          className="btn btn-success w-48"
          onClick={() => approveProduct(product.id)}
        >
          قبول
        </button>
        <button
          className="btn btn-warning w-48"
          onClick={() => rejectProduct(product.id)}
        >
          رفض
        </button>
      </div>
    );
  };
  
  export default ApproveRejectButtons;