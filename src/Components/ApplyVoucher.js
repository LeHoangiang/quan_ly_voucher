import React, { useState } from "react";
import "../Styte/ApplyVoucher.css";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function ApplyVoucher({ open, onClose }) {
  const [expiryOption, setExpiryOption] = useState("");
  const [scopeOption, setScopeOption] = useState("");
  const [creatorOption, setCreatorOption] = useState("");
  const [customerOption, setCustomerOption] = useState("");
  const [activeTab, setActiveTab] = useState("ap_dung");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleClose = () => {
    onClose();
    console.log("onClose:", onClose);
  };

  return (
    <div className={`voucher-apply-form ${open ? "open" : "closed"}`}>
      {/* <h2>Thêm đợt phát hành voucher</h2>
      <div className="tabs">
        <nav>
          <NavLink exact={true} to="/add">
            Thông tin
          </NavLink>

          <NavLink exact={true} to="/apply">
            Áp dụng{" "}
          </NavLink>
        </nav>
        <span>Danh sách voucher</span>
      </div> */}

      <div className="form-content">
        <div className="form-section">
          <label>Thời gian áp dụng</label>
          <div className="form-row">
            <label>
              <input
                type="radio"
                checked={expiryOption === "effectiveness"}
                onChange={() => setExpiryOption("effectiveness")}
              />
              Hiệu lực từ
            </label>
            <input type="date" disabled={expiryOption !== "effectiveness"} />
            <span>Đến</span>
            <input type="date" disabled={expiryOption !== "effectiveness"} />
            <label>
              <input
                type="radio"
                checked={expiryOption === "expiry"}
                onChange={() => setExpiryOption("expiry")}
              />
              Thời hạn sử dụng
            </label>
            <select disabled={expiryOption !== "expiry"}>
              <option value="ngay">ngày</option>
              <option value="thang">tháng</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <label>Phạm vi áp dụng</label>
          <div className="form-row">
            <label>
              <input
                type="radio"
                checked={scopeOption === "system"}
                onChange={() => setScopeOption("system")}
              />
              Toàn hệ thống
            </label>
            <label>
              <input
                type="radio"
                checked={scopeOption === "branch"}
                onChange={() => setScopeOption("branch")}
              />
              Chi nhánh
            </label>
            <input
              type="text"
              placeholder="Chọn chi nhánh áp dụng..."
              disabled={scopeOption !== "branch"}
            />
          </div>
        </div>

        <div className="form-section">
          <label>Đối tượng áp dụng</label>
          <div className="form-row">
            <label>
              <input
                type="radio"
                checked={creatorOption === "all"}
                onChange={() => setCreatorOption("all")}
              />
              Toàn bộ người tạo
            </label>
            <label>
              <input
                type="radio"
                checked={creatorOption === "specific"}
                onChange={() => setCreatorOption("specific")}
              />
              Người tạo
            </label>
            <input
              type="text"
              placeholder="Chọn người tạo áp dụng..."
              disabled={creatorOption !== "specific"}
            />
          </div>
        </div>

        <div className="form-section">
          <label>Khách hàng áp dụng</label>
          <div className="form-row">
            <label>
              <input
                type="radio"
                name="customer"
                checked={customerOption === "all"}
                onChange={() => setCustomerOption("all")}
              />
              Toàn bộ khách hàng
            </label>
            <label>
              <input
                type="radio"
                name="customer"
                checked={customerOption === "specific"}
                onChange={() => setCustomerOption("specific")}
              />
              Nhóm khách hàng
            </label>
            <input type="text" placeholder="Chọn nhóm khách hàng áp dụng..." />
          </div>
        </div>

        <div className="form-buttons">
          <button className="save-btn">Lưu</button>
          <button className="cancel-btn">Bỏ qua</button>
        </div>
        <button className="closes-button" onClick={handleClose}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default ApplyVoucher;
