import React, { useState } from "react";
import ApproveRejectButtons from "../../components/ProductManagement/ApproveRejectButtons";
import RejectionModal from "../../components/ProductManagement/RejectionModal";

const AdsOffersManagement = ({ approveOffer, rejectOffer }) => {
  // بيانات افتراضية للعروض مع نسبة الخصم وسبب الرفض
  const [offers, setOffers] = useState([
    { id: 1, productName: "منتج 1", farmerName: "أحمد", status: "قيد المراجعة", discountPercentage: 10, rejectionReason: "" },
    { id: 2, productName: "منتج 2", farmerName: "يوسف", status: "مقبول", discountPercentage: 15, rejectionReason: "" },
    { id: 3, productName: "منتج 3", farmerName: "مريم", status: "مرفوض", discountPercentage: 20, rejectionReason: "لا يتوافق مع سياسة الجودة" },
  ]);

  const [rejectionReason, setRejectionReason] = useState("");
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [currentOfferId, setCurrentOfferId] = useState(null);

  // دالة لقبول العرض
  const handleApprove = (id) => {
    setOffers((prevOffers) =>
      prevOffers.map((offer) =>
        offer.id === id ? { ...offer, status: "مقبول", rejectionReason: "" } : offer
      )
    );
    approveOffer(id); // استدعاء الدالة الممررة من الأب إذا كانت موجودة
  };

  // دالة لرفض العرض
  const handleReject = (id) => {
    setShowRejectionModal(true);
    setCurrentOfferId(id);
  };

  // دالة لحفظ سبب الرفض
  const saveRejectionReason = () => {
    setOffers((prevOffers) =>
      prevOffers.map((offer) =>
        offer.id === currentOfferId
          ? { ...offer, status: "مرفوض", rejectionReason }
          : offer
      )
    );
    setShowRejectionModal(false);
    setRejectionReason("");
    rejectOffer(currentOfferId, rejectionReason); // استدعاء الدالة الممررة من الأب إذا كانت موجودة
  };

  return (
    <div className="col-md-12">
      <h3>إدارة عروض الإعلانات</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>اسم المنتج</th>
            <th>اسم المزارع</th>
            <th>نسبة الخصم</th>
            <th>حالة العرض</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer.id}>
              <td>{offer.productName}</td>
              <td>{offer.farmerName}</td>
              <td>{offer.discountPercentage}%</td>
              <td>
                <span
                  className={`fw-bold ${
                    offer.status === "مقبول"
                      ? "text-success"
                      : offer.status === "مرفوض"
                      ? "text-danger"
                      : "text-warning"
                  }`}
                >
                  {offer.status}
                </span>
                {/* عرض سبب الرفض إذا كان العرض مرفوضًا */}
                {offer.status === "مرفوض" && (
                  <div className="text-danger mt-2">
                    <strong>سبب الرفض: </strong> {offer.rejectionReason}
                  </div>
                )}
              </td>
              <td>
                {offer.status === "قيد المراجعة" && (
                  <ApproveRejectButtons
                    onApprove={() => handleApprove(offer.id)}
                    onReject={() => handleReject(offer.id)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* نافذة الرفض */}
      {showRejectionModal && (
        <RejectionModal
          setShowRejectionModal={setShowRejectionModal}
          rejectionReason={rejectionReason}
          setRejectionReason={setRejectionReason}
          saveRejectionReason={saveRejectionReason}
        />
      )}
    </div>
  );
};

export default AdsOffersManagement;