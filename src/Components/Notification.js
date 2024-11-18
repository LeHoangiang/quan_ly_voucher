import React from "react";
import "../Styte/Notification.css";

function Notification({ title, message, onConfirm, onCancel }) {
  return (
    <div className="notification">
      <h2>{title}</h2>
      <p>{message}</p>
      <div className="button-group">
        <button onClick={onConfirm}>Đồng ý</button>
        <button onClick={onCancel}>Bỏ qua</button>
      </div>
    </div>
  );
}

export default Notification;
