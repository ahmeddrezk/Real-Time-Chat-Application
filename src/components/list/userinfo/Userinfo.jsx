import "./userinfo.css";
import React from "react";

const Userinfo = () => {
  return (
    <div className="userinfo">
      <div className="user">
        <img src="/img/avatar.png" alt="" />
        <h2>Ahmed </h2>
      </div>
      <div className="icons">
        <img src="/img/more.png" alt="" />
        <img src="/img/video.png" alt="" />
        <img src="/img/edit.png" alt="" />
      </div>
    </div>
  );
};

export default Userinfo;
