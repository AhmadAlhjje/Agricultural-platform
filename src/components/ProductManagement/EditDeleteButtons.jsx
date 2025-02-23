// مكون يحتوي على أزرار التعديل والحذف.
const EditDeleteButtons = ({
    product,
    deleteProduct,
    setEditableProduct,
    setEditedName,
    setEditedDescription,
  }) => {
    return (
      <div className="d-flex justify-content-between w-100 mb-3">
        <button
          className="btn btn-danger w-48"
          onClick={() => deleteProduct(product.id)}
        >
          حذف
        </button>
        <button
          className="btn btn-info w-48"
          onClick={() => {
            setEditableProduct(product.id);
            setEditedName(product.name);
            setEditedDescription(product.description);
          }}
        >
          تعديل
        </button>
      </div>
    );
  };
  
  export default EditDeleteButtons;