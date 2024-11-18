import React, { useState } from "react";
import ApplyVoucher from "./ApplyVoucher"; // Đảm bảo chỉ có một import
import VoucherForm from "./AddVoucher"; // Import component khác
import ListVoucher from "./ListVoucher";
// import Notification from "../Components/Notification.js";

function Merge({ onClose }) {
  const [activeTab, setActiveTab] = useState("thong_tin");
  const [isOpen, setIsOpen] = useState(false); // Bắt đầu với tab "Thông tin"
  // const [showAlert, setShowAlert] = useState(false); // Quản lý việc hiển thị thông báo

  // const handleExportClick = () => {
  //   setShowAlert(true); // Hiển thị thông báo khi nhấn vào button Xuất file
  // };

  // const handleCloseAlert = () => {
  //   setShowAlert(false); // Ẩn thông báo khi nhấn Bỏ qua hoặc Đóng
  // };

  // const handleExportFile = () => {
  //   // Giả sử xuất file sẽ hiển thị lại thông báo
  //   setShowAlert(true); // Đảm bảo thông báo được bật lại sau khi xuất file
  // };
  const handleTabClick = (tab) => {
    setActiveTab(tab); // Cập nhật tab đang hoạt động
  };
  const handleCloseFunction = () => {
    setIsOpen(false); // Đặt trạng thái open thành false để đóng form
  };
  const handleOpenFunction = () => {
    setIsOpen(true);
  };

  return (
    <div className="voucher-apply-form">
      <h2>Thêm đợt phát hành voucher</h2>
      <div className="tabs">
        <span
          className={activeTab === "thong_tin" ? "active-tab" : ""}
          onClick={() => handleTabClick("thong_tin")}
        >
          Thông tin
        </span>
        <span
          className={activeTab === "ap_dung" ? "active-tab" : ""}
          onClick={() => handleTabClick("ap_dung")}
        >
          Áp dụng
        </span>
        <span
          className={activeTab === "danh_sach" ? "active-tab" : ""}
          onClick={() => handleTabClick("danh_sach")}
          // onClick={handleExportClick}
        >
          Tạo danh sách Voucher
        </span>
      </div>

      <div className="form-content">
        {activeTab === "thong_tin" && <VoucherForm onClose={onClose} />}
        {activeTab === "ap_dung" && <ApplyVoucher onClose={onClose} />}
        {activeTab === "danh_sach" && <ListVoucher onClose={onClose} />}
      </div>

      {/* {showAlert && (
        <Notification
          title="Thông báo"
          message="Bạn cần phải lưu đợt phát hành voucher trước khi tạo danh sách voucher. Bạn có muốn lưu không?"
          onConfirm={() => console.log("Đồng ý")}
          onCancel={handleCloseAlert}
        />
      )} */}
    </div>
  );
}

export default Merge;
