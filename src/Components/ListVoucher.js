import React, { useState } from "react";

import "../Styte/ListVoucher.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Form from "./Tao_1_Voucher";
import CreateForm from "./Tao_ds_Voucher";
import ReleaseVoucherForm from "./ReleaseVoucher";
import FileUpload from "./FileUpLoad";
function ListVoucher({ open, onClose }) {
  const [activeTab, setActiveTab] = useState("danh_sach");
  const [isOpen, setIsOpen] = useState(false);
  const [showVoucherForm, setShowVoucherForm] = useState(false); // State để quản lý hiển thị VoucherForm
  const [showCreateForm, setShowCreateForm] = useState(false); // State để quản lý hiển thị CreateForm
  const [showReleaseForm, setShowReleaseForm] = useState(false);
  const [showUploadFile, setShowUploadFile] = useState(false);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleClose = () => {
    onClose();
    console.log("onClose:", onClose);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log("Bạn đã chọn:", option);
    setIsOpen(false);
  };
  const handleAddVoucherClick = () => {
    setShowVoucherForm(true); // Hiển thị component Tao_1_Voucher
    setShowCreateForm(false);
  };
  const handleAddCreateFormClick = () => {
    setShowCreateForm(true); // Hiển thị component CreateForm
    setShowVoucherForm(false); // Ẩn component Tao_1_Voucher
  };
  const handleCloseVoucherForm = () => {
    setShowVoucherForm(false); // Ẩn component Tao_1_Voucher
  };
  const handleCloseCreateForm = () => {
    setShowCreateForm(false); // Ẩn component CreateForm
  };
  const handleImportClick = () => {
    setShowUploadFile(true); // Hiển thị component UploadFile
  };

  const handleCloseUploadFile = () => {
    setShowUploadFile(false); // Ẩn component UploadFile
  };
  // const handleFormSuccess = () => {
  //   console.log("Đăng nhập thành công!");
  //   handleCloseVoucherForm(); // Đóng dialog
  // };
  const handleReleaseVoucherClick = () => {
    setShowReleaseForm(true); // Hiển thị component ReleaseVoucherForm
    setIsOpen(false); // Đóng dropdown
  };
  const handleCloseReleaseForm = () => {
    setShowReleaseForm(false); // Ẩn ReleaseVoucherForm
  };
  // if (showReleaseForm) {
  //   return <ReleaseVoucherForm />; // Hiển thị ReleaseVoucherForm
  // }
  if (showVoucherForm) {
    return <Form open={showVoucherForm} onClose={handleCloseVoucherForm} />;
  }
  if (showCreateForm) {
    return <CreateForm open={showCreateForm} onClose={handleCloseCreateForm} />;
  }
  if (showReleaseForm) {
    return <ReleaseVoucherForm onClose={handleCloseReleaseForm} />; // Truyền hàm onClose
  }
  if (showUploadFile) {
    return <FileUpload onClose={handleCloseUploadFile} />; // Hiển thị UploadFile
  }
  return (
    <div className={`voucher-container ${open ? "open" : "closed"}`}>
      {/* <h2 className="voucher-heading">Thêm đợt phát hành voucher</h2>

     
      <div className="voucher-tabs">
        <div className="voucher-tab">Thông tin</div>
        <div className="voucher-tab">Áp dụng</div>
        <div className="voucher-tab voucher-tab-active">Danh sách voucher</div>
      </div> */}

      {/* Action Buttons */}
      <div className="voucher-action">
        <div className="voucher-actions">
          <button className="voucher-button" onClick={toggleDropdown}>
            ⋮ Thao tác <span> ▼</span>
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="dropdown-menu">
              <div
                className="dropdown-item"
                onClick={handleReleaseVoucherClick}
              >
                <FontAwesomeIcon icon={faCheck} />{" "}
                <span>Phát hành Voucher </span>
              </div>
              <div
                className="dropdown-item"
                onClick={() => handleOptionClick("Lựa chọn 2")}
              >
                <FontAwesomeIcon icon={faBarcode} /> <span>In mã voucher</span>
              </div>
              <div
                className="dropdown-item"
                onClick={() => handleOptionClick("Lựa chọn 3")}
              >
                <FontAwesomeIcon icon={faArrowCircleLeft} />{" "}
                <span>Sửa Voucher </span>
              </div>
              <div
                className="dropdown-item"
                onClick={() => handleOptionClick("Lựa chọn 4")}
              >
                <FontAwesomeIcon icon={faTrash} /> <span>Huỷ Voucher </span>
              </div>
            </div>
          )}
        </div>
        <button className="voucher-button" onClick={handleAddVoucherClick}>
          + Voucher
        </button>
        <Form
          open={showVoucherForm}
          onClose={handleCloseVoucherForm}
          // onSuccess={handleFormSuccess}
        />
        <button
          className="voucher-button"
          style={{ width: "200px" }}
          onClick={handleAddCreateFormClick}
        >
          + Danh sách voucher
        </button>
        <CreateForm
          open={showCreateForm}
          onClose={handleAddCreateFormClick}
          // onSuccess={handleFormSuccess}
        />
        <button className="voucher-button" onClick={handleImportClick}>
          ⤵ Import
        </button>
      </div>

      {/* Table */}
      <table className="voucher-table">
        <thead>
          <tr className="voucher-table-head">
            <th>Mã voucher</th>
            <th>Người mua</th>
            <th>Ngày phát hành</th>
            <th>Ngày hết hạn</th>
            <th>Ngày sử dụng</th>
            <th>Giá bán</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="7" className="voucher-empty">
              Không tìm thấy kết quả nào phù hợp
            </td>
          </tr>
        </tbody>
      </table>

      {/* Footer */}
      <div className="voucher-footer">
        <div>
          Số lượng voucher hiển thị trên trang:
          <select className="voucher-select">
            <option value="10">1</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <button className="voucher-save-button">Lưu</button>
        <button className="voucher-export-button">Xuất file</button>

        <button className="closes-button" onClick={handleClose}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default ListVoucher;
