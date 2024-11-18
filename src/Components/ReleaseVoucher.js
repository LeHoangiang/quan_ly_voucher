import React from "react";
import "../Styte/releaseVoucher.css";

const ReleaseVoucherForm = ({ onClose }) => {
  return (
    <div className="voucher-forms">
      <h2>Phát hành voucher</h2>
      <div className="forms-content">
        <div className="left-column">
          <div className="form-group">
            <label>Số lượng voucher</label>
            <input type="text"></input>
          </div>
          <div className="form-group">
            <label>Hình thức</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="type" value="Bán" defaultChecked />{" "}
                Bán
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="Tặng"
                  style={{ marginLeft: "-10px" }}
                />{" "}
                Tặng
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Ngày phát hành</label>
            <input
              type="date"
              defaultValue="2021-10-21"
              style={{ width: "250px", height: "35px" }}
            />
          </div>
          <div className="form-group">
            <label>Ghi chú</label>
            <textarea placeholder="Ghi chú..." />
          </div>
          {/* <div className="form-group">
            <label>Nhóm người mua/nhận</label>
            <select>
              <option value="Khác">Khác</option>
             
            </select>
          </div>
          <div className="form-group">
            <label>Tên người mua/nhận</label>
            <input type="text" placeholder="Tìm kiếm" />
          </div> */}
        </div>

        <div className="right-column">
          <div className="form-group">
            <label>Giá bán</label>
            {/* <input type="number" defaultValue={0} /> */}
            <input type="text"></input>
          </div>
          <div className="form-group">
            <label>Khách thanh toán</label>
            <input type="text"></input>
          </div>
          <div className="form-group">
            <label>Phương thức</label>
            <select style={{ width: "250px", height: "35px" }}>
              <option value="Tiền mặt">Tiền mặt</option>
              <option value="Chuyển khoản">Chuyển khoản</option>
              <option value="Quẹt thẻ">Quẹt thẻ</option>
              {/* Thêm các tùy chọn khác nếu cần */}
            </select>
          </div>
        </div>
      </div>
      <div className="form-footer">
        <button className="save-button">Lưu</button>
        <button className="cancel-button" onClick={onClose}>
          Bỏ qua
        </button>
      </div>
    </div>
  );
};

export default ReleaseVoucherForm;
