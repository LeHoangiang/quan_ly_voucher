import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Typography,
  DialogActions,
} from "@mui/material";
import { PhoneAndroid, Refresh } from "@mui/icons-material";
import "../Styte/LoginScreen.css"; // Import file CSS mới
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function LoginDialog({ open, onClose }) {
  const navigate = useNavigate(); // Khởi tạo navigate

  const handleLogin = () => {
    navigate("/home"); // Điều hướng đến trang Home khi đăng nhập thành công
    onClose(); // Đóng dialog
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle className="dialogTitle">Đăng nhập tài khoản </DialogTitle>
      <DialogContent dividers>
        <TextField fullWidth label="Họ tên" variant="outlined" required />
        <TextField
          fullWidth
          label="Số điện thoại"
          variant="outlined"
          InputProps={{
            startAdornment: <PhoneAndroid style={{ color: "gray" }} />,
          }}
          required
          style={{ marginTop: "20px" }}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Địa chỉ truy cập cửa hàng"
          type="text"
          fullWidth
          variant="outlined"
          InputLabelProps={{
            shrink: undefined, // hoặc dùng undefined
            style: {
              transform: "translate(14px, -12px) scale(1)", // Điều chỉnh vị trí label
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: "16px",
              marginTop: "20px",
            },
          }}
        />
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          Bạn chưa có gian hàng?{" "}
          <a href="/" className="link">
            Dùng thử miễn phí
          </a>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          className="dialogButton"
        >
          Vào Cửa Hàng
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default LoginDialog;
