import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { PhoneAndroid, Refresh } from "@mui/icons-material";
import "../Styte/registerScreen.css";
import { useNavigate } from "react-router-dom";
import LoginDialog from "./LoginScreen";

const RegistrationForm = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
  return (
    <Container maxWidth="lg" className="container">
      {/* Bên trái */}
      <Grid container style={{ height: "100vh" }}>
        <Grid item xs={6} className="leftBox">
          <div className="text-container">
            <Typography variant="h4" className="leftBoxTitle">
              Quản lý dễ dàng
            </Typography>
            {/* <Typography variant="h4" fontWeight="bold">
              -
            </Typography> */}
            <Typography variant="h4" fontWeight="bold">
              Bán hàng đơn giản
            </Typography>
          </div>
        </Grid>

        {/* Bên phải */}
        <Grid item xs={6} className="rightBox">
          <div className="form">
            <Typography variant="h5" className="formTitle">
              Tạo tài khoản dùng thử miễn phí
            </Typography>
            <form noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Họ tên"
                    variant="outlined"
                    required
                    InputLabelProps={{
                      shrink: undefined, // hoặc dùng undefined
                      style: {
                        transform: "translate(14px, 8px) scale(1)", // Điều chỉnh vị trí label
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "16px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Số điện thoại"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <PhoneAndroid style={{ color: "gray" }} />
                      ),
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    required
                    InputLabelProps={{
                      shrink: undefined, // hoặc dùng undefined
                      style: {
                        transform: "translate(14px, 8px) scale(1)", // Điều chỉnh vị trí label
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "16px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Quốc gia đang kinh doanh"
                    variant="outlined"
                    select
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="" style={{ color: "#999999" }}></option>
                    <option value="VN">Việt Nam</option>
                    <option value="US">Hoa Kỳ</option>
                    <option value="BR">Brazil</option>
                    <option value="CO">Colombia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="MX">Mexico</option>
                    <option value="JP">Japan</option>
                    <option value="HN">Honduras</option>
                    <option value="PE">Peru</option>
                    <option value="IT">Italy</option>
                    <option value="KE">Kenya</option>
                    <option value="TH">Thailand</option>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Chọn khu vực"
                    variant="outlined"
                    select
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="" style={{ color: "#999999" }}></option>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                    <option value="Hải Phòng">Hải Phòng</option>
                    <option value="Cần Thơ">Cần Thơ</option>
                    <option value="An Giang">An Giang</option>
                    <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                    <option value="Bắc Giang">Bắc Giang</option>
                    <option value="Bắc Ninh">Bắc Ninh</option>
                    <option value="Bến Tre">Bến Tre</option>
                    <option value="Bình Dương">Bình Dương</option>
                    <option value="Bình Định">Bình Định</option>
                    <option value="Bình Phước">Bình Phước</option>
                    <option value="Cà Mau">Cà Mau</option>
                    <option value="Đắk Lắk">Đắk Lắk</option>
                    <option value="Đắk Nông">Đắk Nông</option>
                    <option value="Điện Biên">Điện Biên</option>
                    <option value="Gia Lai">Gia Lai</option>
                    <option value="Hà Giang">Hà Giang</option>
                    <option value="Hà Nam">Hà Nam</option>
                    <option value="Hà Tĩnh">Hà Tĩnh</option>
                    <option value="Hải Dương">Hải Dương</option>
                    <option value="Hậu Giang">Hậu Giang</option>
                    <option value="Hòa Bình">Hòa Bình</option>
                    <option value="Hưng Yên">Hưng Yên</option>
                    <option value="Khánh Hòa">Khánh Hòa</option>
                    <option value="Kiên Giang">Kiên Giang</option>
                    <option value="Kon Tum">Kon Tum</option>
                    <option value="Lạng Sơn">Lạng Sơn</option>
                    <option value="Lào Cai">Lào Cai</option>
                    <option value="Long An">Long An</option>
                    <option value="Nam Định">Nam Định</option>
                    <option value="Ninh Bình">Ninh Bình</option>
                    <option value="Ninh Thuận">Ninh Thuận</option>
                    <option value="Phú Thọ">Phú Thọ</option>
                    <option value="Phú Yên">Phú Yên</option>
                    <option value="Quảng Bình">Quảng Bình</option>
                    <option value="Quảng Nam">Quảng Nam</option>
                    <option value="Quảng Ngãi">Quảng Ngãi</option>
                    <option value="Quảng Ninh">Quảng Ninh</option>
                    <option value="Sóc Trăng">Sóc Trăng</option>
                    <option value="Sơn La">Sơn La</option>
                    <option value="Tây Ninh">Tây Ninh</option>
                    <option value="Thái Bình">Thái Bình</option>
                    <option value="Thái Nguyên">Thái Nguyên</option>
                    <option value="Thanh Hóa">Thanh Hóa</option>
                    <option value="Thừa Thiên - Huế">Thừa Thiên - Huế</option>
                    <option value="Tiền Giang">Tiền Giang</option>
                    <option value="Trà Vinh">Trà Vinh</option>
                    <option value="Tuyên Quang">Tuyên Quang</option>
                    <option value="Vĩnh Long">Vĩnh Long</option>
                    <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                    <option value="Yên Bái">Yên Bái</option>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox name="checkedA" />}
                    label={
                      <Typography variant="body2">
                        Tôi đã đọc và đồng ý{" "}
                        <a
                          href="/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="termsLink"
                        >
                          Điều khoản và chính sách sử dụng
                        </a>
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    className="continueButton"
                    onClick={handleOpenDialog}
                  >
                    Tiếp tục
                  </Button>
                  <LoginDialog
                    open={isDialogOpen}
                    onClose={handleCloseDialog}
                    onSuccess={handleLoginSuccess}
                  />
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegistrationForm;
