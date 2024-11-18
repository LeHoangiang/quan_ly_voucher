import React, { useState } from "react";
import "../Styte/HomeScreen.css"; // Import CSS
import { useNavigate } from "react-router-dom";
import LoginDialog from "./LoginScreen";
import Management from "./Management";

const HomeScreen = ({ open, onClose }) => {
  const navigate = useNavigate(); // Khởi tạo navigate

  const handleRegister = () => {
    navigate("/"); // Điều hướng đến trang Home khi đăng nhập thành công
    // onClose(); // Đóng dialog
  };
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isManagementOpen, setIsManagementOpen] = useState(false);
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const handleLoginSuccess = () => {
    console.log("Đăng nhập thành công!");
    handleCloseDialog(); // Đóng dialog
  };
  const handleOpenManagement = () => {
    setIsManagementOpen(true);
    console.log(isManagementOpen); // Mở modal quản lý voucher
  };

  const handleCloseManagement = () => {
    setIsManagementOpen(false); // Đóng modal quản lý voucher
  };
  const handleManagementSuccess = () => {
    console.log("Đăng nhập thành công!");
    handleCloseManagement(); // Đóng dialog
  };
  return (
    <div className="container">
      {/* <header className="header">
        <div className="auth-buttons">
          <button
            className="custom-button btn1"
            style={{ width: "100px" }}
            onClick={handleRegister}
          >
            Đăng ký
          </button>
          <button className="custom-button btn2" onClick={handleOpenDialog}>
            Đăng nhập
          </button>
          <LoginDialog
            open={isDialogOpen}
            onClose={handleCloseDialog}
            onSuccess={handleLoginSuccess}
          />
        </div>
      </header> */}
      <div className="content">
        <nav className="sidebar">
          <ul>
            <li>
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#">Thiết lập tính năng</a>
            </li>
            <button className="btn3" onClick={handleOpenManagement}>
              Quản lý voucher
            </button>
            <Management
              open={isManagementOpen}
              onClose={handleCloseManagement}
              onSuccess={handleManagementSuccess}
            />

            <li>
              <a href="#">Báo cáo</a>
            </li>
          </ul>
        </nav>
        <div className="main-content">
          <h3>Quản lý voucher</h3>
          <img
            src="https://img.freepik.com/free-vector/coffee-discount-coupon-gift-voucher-label-coffee-discount-banner-coupon-voucher-coffee-espresso-free-gift-illustration-vector-template_1284-46249.jpg?w=360"
            alt="Voucher"
          />
          <p
            style={{
              marginLeft: "30px",
              marginRight: "200px",
              lineHeight: "1.5",
            }}
          >
            Voucher là một dạng phiếu mua hàng và khách hàng có thể sử dụng
            voucher khi mua hàng tương đương như một phương thức thanh toán
            (Tiền mặt, Thẻ hoặc Chuyển khoản…)
            <br />
            Lợi ích của voucher: Là phương tiện marketing hữu hiệu, là cầu nối
            giúp doanh nghiệp chăm sóc, gắn kết khách hàng thân thiết…được sử
            dụng rộng rãi trong các hoạt động kinh doanh…
            <br />
            Tính năng voucher của KiotViet nhằm:
            <br />
            - Hỗ trợ quản lý từng voucher một cách rõ ràng và thống nhất: từ
            việc quản lý các điều kiện sử dụng voucher theo đợt phát hành, cho
            đến phát hành, trả, hủy từng voucher và theo dõi lịch sử của từng
            voucher đó trong các giao dịch liên quan.
            <br />
            - Bổ sung thêm 2 hình thức khuyến mại tặng voucher theo hóa đơn hoặc
            theo hàng hóa giúp chủ cửa hàng chăm sóc khách hàng hiệu quả.
            <br />
            - Sau khi cửa hàng tặng hoặc bán voucher cho khách hàng, KiotViet
            quản lý tất cả các giao dịch của khách hàng với cửa hàng liên quan
            tới voucher như: Thanh toán hóa đơn, Trả hàng, Đổi trả hàng kèm việc
            kiểm tra các điều kiện áp dụng và lưu thông tin chặt chẽ, cụ thể.
            <br />
            - Quản lý hóa đơn kèm các báo cáo (báo cáo cuối ngày, báo cáo tài
            chính) có phân tích các số liệu như chi phí bán hàng liên quan tới
            voucher hoặc tổng khách thanh toán bằng voucher để cửa hàng phân
            tích rõ hiệu quả kinh doanh sau khi sử dụng voucher.
            <br />
            - Ngoài ra, với các thiết lập linh hoạt như cho phép áp dụng thanh
            toán gộp voucher, áp dụng kèm thanh toán bằng điểm hoặc các chương
            trình khuyến mại khác giúp chủ cửa hàng sử dụng các đợt phát hành
            voucher một cách linh hoạt.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
