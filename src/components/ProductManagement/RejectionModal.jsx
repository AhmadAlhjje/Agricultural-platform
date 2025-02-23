// مكون يعرض نافذة الرفض.
const RejectionModal = ({
    setShowRejectionModal,
    rejectionReason,
    setRejectionReason,
    saveRejectionReason,
  }) => {
    return (
      <div className="modal" style={{ display: "block", position: "fixed", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="modal-content" style={{ backgroundColor: "white", width: "300px", padding: "20px", margin: "auto", marginTop: "150px", borderRadius: "8px" }}>
          <h5>سبب الرفض</h5>
          <textarea
            className="form-control"
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
            placeholder="أدخل سبب الرفض"
          />
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-danger" onClick={() => setShowRejectionModal(false)}>إلغاء</button>
            <button className="btn btn-success" onClick={saveRejectionReason}>حفظ</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default RejectionModal;