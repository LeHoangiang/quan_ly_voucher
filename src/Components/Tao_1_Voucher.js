import React, { useState } from "react";
import "../Styte/tao_Voucher.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Form({ open, onClose }) {
  const [vouchers, setVouchers] = useState([""]); // Bắt đầu với một voucher trống
  const [showModal, setShowModal] = useState(true);
  const handleVoucherChange = (e, index) => {
    const newVouchers = [...vouchers];
    newVouchers[index] = e.target.value; // Cập nhật giá trị voucher tại chỉ mục index
    setVouchers(newVouchers);
  };

  const handleAddVoucher = () => {
    setVouchers([...vouchers, ""]); // Thêm một voucher trống vào danh sách
  };

  const handleRemoveVoucher = (index) => {
    const newVouchers = [...vouchers];
    newVouchers.splice(index, 1); // Xóa voucher tại chỉ mục index
    setVouchers(newVouchers);
  };
  const handleClose = () => {
    setShowModal(false); // Đóng modal
    onClose(); // Gọi hàm onClose từ component cha để cập nhật trạng thái open
  };
  if (!open) return null;
  return (
    <div className="form">
      <h3>Thêm voucher</h3>

      {/* Duyệt qua tất cả các vouchers và tạo các input */}
      {vouchers.map((voucher, index) => (
        <div key={index} className="form-group">
          {/* Hiển thị label "Mã voucher" mà không có số thứ tự */}
          <label htmlFor={`voucher-${index}`}>Mã voucher</label>
          <input
            id={`voucher-${index}`}
            type="text"
            placeholder="Nhập mã voucher"
            value={voucher}
            onChange={(e) => handleVoucherChange(e, index)} // Cập nhật khi thay đổi input
          />
          <div style={{ width: "10px" }}></div>
          {vouchers.length > 1 && (
            <button
              className="remove-button"
              onClick={() => handleRemoveVoucher(index)} // Xóa voucher tại chỉ mục
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}
        </div>
      ))}

      <button className="add-button" onClick={handleAddVoucher}>
        + Thêm voucher
      </button>

      <div className="form-buttons">
        <button className="save-btn">Tạo</button>
        <button className="cancel-btn" onClick={handleClose}>
          Bỏ qua
        </button>
      </div>

      <button
        className="close-button"
        // style={{ top: "-120px", right: "-10px" }}
        // onClick={handleCloseVoucherForm}
        onClick={handleClose}
      >
        ✕
      </button>
    </div>
  );
}

export default Form;
