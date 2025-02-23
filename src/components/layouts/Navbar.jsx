import React from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi"; // استيراد أيقونة السلة

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success text-white">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* الروابط */}
        <ul className="navbar-nav d-flex flex-row gap-3">
        <li className="nav-item">
            <Link className="nav-link text-white fw-bold position-relative" to="/cart">
              <BiShoppingBag size={25} /> {/* أيقونة السلة */}
              <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                0 {/* استبدلها بعدد المنتجات الفعلي */}
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="/">زراعي</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="/products">المنتجات</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="/profile">حسابي</Link>
          </li>
        </ul>

        {/* أزرار تسجيل الدخول والخروج */}
        <div className="d-flex">
          {isAuthenticated ? (
            <button className="btn btn-outline-light rounded-pill shadow-sm px-3 fw-bold" onClick={onLogout}>
              تسجيل الخروج
            </button>
          ) : (
            <div className="d-flex gap-2">
              <Link className="btn btn-outline-light rounded-pill shadow-sm px-3 fw-bold" to="/login">
                تسجيل الدخول
              </Link>
              <Link className="btn btn-warning rounded-pill shadow-sm px-3 fw-bold text-dark" to="/register">
                تسجيل جديد
              </Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
