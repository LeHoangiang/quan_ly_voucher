import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import "../Styte/Management.css";
// import VoucherForm from "./AddVoucher";
// import "../Styte/AddVoucher.css";
import Merge from "./KetHop";
import { useEffect } from "react";
// Title Component
const TitleAndSearch = ({ onMerge }) => (
  <div className="title-search-container">
    <h1 className="title">Voucher</h1>
    <SearchBar />
    <button className="custom-button btn1" onClick={onMerge}>
      {" "}
      + Thêm đợt phát hành mới
    </button>
    <button className="custom-button btn2">Danh sách</button>
  </div>
);

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => setSearchText(e.target.value);

  return (
    <input
      type="text"
      placeholder="🔍Tìm theo mã, hoặc đợt phát hành"
      value={searchText}
      onChange={handleSearchChange}
      className="search-bar"
    />
  );
};

// Filters Component
const Filters = () => {
  const [selectedStatus, setSelectedStatus] = useState({
    active: false,
    expired: false,
    used: false,
  });

  const handleStatusChange = (e) => {
    const { name, checked } = e.target;
    setSelectedStatus({
      active: name === "active",
      expired: name === "expired",
      used: name === "used",
    });
  };

  const handleSelectChange = (e) => {
    // Reset checkbox khi chọn trạng thái mới
    setSelectedStatus({
      active: false,
      expired: false,
      used: false,
    });
  };

  return (
    <div
      className="filters-container"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="filters">
        <div className="filter-item">
          <select className="branch-filter">
            <option value="">Chi nhánh</option>
            <option value="branch1">Chi nhánh 1</option>
            <option value="branch2">Chi nhánh 2</option>
            <option value="branch3">Chi nhánh 3</option>
          </select>
        </div>
        <div className="status-checkboxes">
          <p style={{ marginLeft: "20px", marginTop: "5px" }}>Trạng thái </p>
          <label>
            <input
              type="checkbox"
              name="active"
              checked={selectedStatus.active}
              onChange={handleStatusChange}
            />
            Tất cả
          </label>
          <label>
            <input
              type="checkbox"
              name="expired"
              checked={selectedStatus.expired}
              onChange={handleStatusChange}
            />
            Kích hoạt
          </label>
          <label>
            <input
              type="checkbox"
              name="used"
              checked={selectedStatus.used}
              onChange={handleStatusChange}
            />
            Chưa áp dụng
          </label>
        </div>
      </div>
      <DataTable />
    </div>
  );
};

// DataTable Component
const DataTable = () => {
  const vouchers = [{}];

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Mã Đợt phát hành</th>
          <th>Tên Đợt phát hành</th>
          <th>Từ ngày</th>
          <th>Đến ngày</th>
          <th>Số lượng</th>
          <th>Mệnh giá</th>
          <th>Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        {vouchers.map((voucher, index) => (
          <tr key={index}>
            <td>{voucher.code}</td>
            <td>{voucher.name}</td>
            <td>{voucher.fromTime}</td>
            <td>{voucher.toTime}</td>
            <td>{voucher.quantity}</td>
            <td>{voucher.value}</td>
            <td>{voucher.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// ActionButtons Component
const ActionButtons = () => {
  const handleAddNew = () => {
    // Xử lý thêm mới voucher
  };

  const handleExportData = () => {
    // Xử lý xuất dữ liệu
  };
};

// App Component
const Management = ({ open, onClose }) => {
  const [showModal, setShowModal] = useState(true);
  const [showMerge, setShowMerge] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll"); // Clean up on unmount
    };
  }, [open]);

  const handleMerge = () => {
    setShowMerge(true); // Hiển thị component Merge
  };

  const handleCloseMerge = () => {
    setShowMerge(false);
  };

  const handleClose = () => {
    setShowModal(false); // Đóng modal
    onClose(); // Gọi hàm onClose từ component cha để cập nhật trạng thái open
  };
  if (!open) return null;

  return (
    <div className="app">
      {!showMerge ? (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleClose}>
              ✕
            </button>
            <TitleAndSearch onMerge={handleMerge} />
            <Filters />
            <ActionButtons />
          </div>
        </div>
      ) : (
        <div className="add-voucher-overlay">
          {/* <VoucherForm onClose={handleCloseAddVoucher} /> */}
          <Merge onClose={handleCloseMerge} />
        </div>
      )}
    </div>
  );
};
export default Management;
