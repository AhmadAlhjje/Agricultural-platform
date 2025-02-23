import { useState } from "react";

const UserManagement = () => {
  // افتراض بيانات المستخدمين
  const [users, setUsers] = useState([
    { id: 1, name: "أحمد", type: "مزارع", isVerified: true },
    { id: 2, name: "فاطمة", type: "مشتري", isVerified: false },
    { id: 3, name: "يوسف", type: "مزارع", isVerified: false },
    { id: 4, name: "مريم", type: "مشتري", isVerified: true },
  ]);

  const [selectedType, setSelectedType] = useState("farmers"); // حالة لاختيار النوع (مزارع أو مشتري)

  // دالة لحظر المستخدم
  const banUser = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isBanned: true } : user
      )
    );
  };

  // دالة لحذف المستخدم
  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  // دالة لتوثيق المزارع
  const verifyFarmer = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id && user.type === "مزارع"
          ? { ...user, isVerified: true }
          : user
      )
    );
  };

  // تقسيم المستخدمين إلى مزارعين ومشترين
  const farmers = users.filter((user) => user.type === "مزارع");
  const buyers = users.filter((user) => user.type === "مشتري");

  // تحديد الجدول المعروض بناءً على الاختيار
  const displayedTable = selectedType === "farmers" ? farmers : buyers;

  return (
    <div className="col-md-12">
      <div className="mb-3">
        <label className="form-label">اختر نوع المستخدم:</label>
        <select
          className="form-select"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="farmers">المزارعين</option>
          <option value="buyers">المشترين</option>
        </select>
      </div>

      <h3>{selectedType === "farmers" ? "إدارة المزارعين" : "إدارة المشترين"}</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>الاسم</th>
            <th>نوع المستخدم</th>
            <th>التوثيق</th>
            <th>الحالة</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {displayedTable.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.type}</td>
              <td>
                {user.type === "مزارع" && user.isVerified ? (
                  <span className="text-success fw-bold">موثق</span>
                ) : user.type === "مزارع" ? (
                  <span className="text-danger fw-bold">غير موثق</span>
                ) : (
                  <span className="text-muted">_</span>
                )}
              </td>
              <td>
                {user.isBanned ? (
                  <span className="text-danger">محظور</span>
                ) : (
                  <span className="text-success">مفعل</span>
                )}
              </td>
              <td>
                <div className="d-flex flex-column align-items-center">
                  {user.type === "مزارع" && !user.isVerified && (
                    <button
                      className="btn btn-success mb-2"
                      onClick={() => verifyFarmer(user.id)}
                    >
                      توثيق
                    </button>
                  )}
                  {!user.isBanned && (
                    <button
                      className="btn btn-warning mb-2"
                      onClick={() => banUser(user.id)}
                    >
                      حظر
                    </button>
                  )}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    حذف
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
