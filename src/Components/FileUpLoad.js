import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const FileUpload = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file ? file.name : null); // Lấy tên file thay vì object
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert(`File "${selectedFile}" đã được chọn!`);
      // Thực hiện upload file tại đây
    } else {
      alert("Vui lòng chọn file trước khi upload!");
    }
  };

  // CSS viết trực tiếp
  const styles = {
    container: {
      width: "400px",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "#fff",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      marginLeft: "350px",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
    },
    note: {
      backgroundColor: "#fffbea",
      padding: "10px",
      margin: "15px 0",
      borderRadius: "5px",
      border: "1px solid #ffe58f",
      textAlign: "left",
      fontSize: "14px",
    },
    fileInput: {
      display: "none",
    },
    customFileButton: {
      backgroundColor: "#999",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "10px 15px",
      cursor: "pointer",
      fontSize: "14px",
      display: "inline-block",
      marginRight: "10px",
    },
    customFileButtonHover: {
      backgroundColor: "#999",
    },
    uploadButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "10px 15px",
      cursor: "pointer",
      fontSize: "14px",
      marginTop: "10px",
    },
    fileName: {
      fontSize: "14px",
      color: "#333",
      fontStyle: "italic",
    },
    cancelbutton: {
      backgroundColor: "transparent", // Sửa lỗi ở đây
      border: "none",
      color: "#333",
      fontSize: "20px",
      cursor: "pointer",
      position: "absolute",
      top: "120px",
      right: "430px",
    },
  };

  return (
    <div style={styles.container}>
      <h3>Nhập voucher từ File dữ liệu</h3>
      {/* <p>
        (Tải về file mẫu{" "}
        <a href="/sample.xlsx" style={styles.link}>
          Excel file
        </a>
        )
      </p> */}
      <div style={styles.note}>
        <p>⚠️ Lưu ý</p>
        <p>Hệ thống cho phép nhận tối đa 5.000 voucher mỗi lần từ file</p>
      </div>
      {/* Ẩn input file */}
      <input
        type="file"
        id="fileInput"
        style={styles.fileInput}
        onChange={handleFileChange}
      />
      {/* Nút chọn file */}
      <div>
        <label
          htmlFor="fileInput"
          style={styles.customFileButton}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#999")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#999")}
        >
          Chọn file dữ liệu
        </label>
        {/* Hiển thị tên file */}
        {selectedFile && <span style={styles.fileName}>{selectedFile}</span>}
      </div>
      {/* Nút tải lên */}
      <button
        style={styles.uploadButton}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        onClick={handleUpload}
      >
        Tải lên
      </button>
      <button
        className="cancel-button"
        style={styles.cancelbutton}
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
};

export default FileUpload;
