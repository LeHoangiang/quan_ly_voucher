import React, { useState } from "react";
import "../Styte/AddVoucher.css";
import ApplyVoucher from "./ApplyVoucher.js";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Management from "./Management.js";

function VoucherForm({ onClose }) {
  const [activeTab, setActiveTab] = useState("thong-tin");
  const [showVoucherForm, setShowVoucherForm] = useState(true);

  const handleCloseVoucherForm = () => {
    setShowVoucherForm(false); // Đóng VoucherForm và hiện ManagementForm
    onClose();
  };

  const renderContent = () => {
    switch (activeTab) {
      case "thong-tin":
        return (
          <div className="form-content">
            <div className="form-row">
              <div className="form-group">
                <label>Mã đợt phát hành</label>
                <input type="text" placeholder="Mã tự động" />
              </div>

              <div className="form-group">
                <label style={{ width: "200px" }}>Hàng/nhóm hàng mua</label>
                <input type="text" placeholder="Chọn hàng mua" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Tên đợt phát hành</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label style={{ width: "200px" }}>Tổng tiền hàng</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Mệnh giá</label>
                <input type="text" />
              </div>
              <div className="form-group">
                {/* <label style={{ width: "200px" }}>Ghi chú</label>  */}
                <input type="text" placeholder="✍️ Ghi chú..." />
              </div>
            </div>

            <div className="form-row">
              <label style={{ width: "100px" }}>Tình trạng</label>
              <div className="align-left">
                <div className="radio-group">
                  <input type="radio" id="active" name="status" />
                  <label htmlFor="active">Kích hoạt</label>
                  <input type="radio" id="inactive" name="status" />
                  <label htmlFor="inactive">Chưa áp dụng</label>
                </div>
              </div>
            </div>

            <div className="form-row checkbox-group">
              <div className="align-left">
                <input type="checkbox" id="multi-apply" />
                <label htmlFor="multi-apply">
                  Áp dụng gộp nhiều voucher trên một hoá đơn{" "}
                </label>
              </div>
            </div>
          </div>
        );
      case "ap_dung":
        return <ApplyVoucher />;
      default:
        return null;
    }
  };
  return (
    <>
      {showVoucherForm && (
        <div className="voucher-form">
          {renderContent()}
          <div className="form-buttons">
            <button className="save-btn">Lưu</button>
            <button className="cancel-btn">Bỏ qua</button>
          </div>
          <button
            className="close-button"
            style={{ top: "-120px", right: "-10px" }}
            onClick={handleCloseVoucherForm}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}

export default VoucherForm;
