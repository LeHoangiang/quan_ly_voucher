import React, { useState } from "react";
import "../Styte/tao_ds_voucher.css"; // File CSS để định dạng

function CreateForm({ open, onClose }) {
  const [showModal, setShowModal] = useState(true);
  const handleClose = () => {
    setShowModal(false); // Đóng modal
    onClose(); // Gọi hàm onClose từ component cha để cập nhật trạng thái open
  };
  if (!open) return null;
  return (
    <div className="create-form">
      <h3>Thêm danh sách voucher</h3>
      <div className="form-rows">
        <div className="form-groups">
          <label>
            Số lượng voucher <span className="icon"> ℹ️ </span>
          </label>
          <input type="text" />
        </div>
        <div className="form-groups">
          <label>
            Độ dài mã voucher <span className="icon"> ℹ️ </span>
          </label>
          <input type="text" />
        </div>
        <div className="form-groups">
          <label>
            Kí tự bắt đầu <span className="icon"> ℹ️ </span>{" "}
          </label>
          <input type="text" />
        </div>
        <div className="form-groups">
          <label>
            Kí tự kết thúc <span className="icon"> ℹ️ </span>
          </label>
          <input type="text" />
        </div>
      </div>
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

export default CreateForm;
