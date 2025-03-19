import "./details.css";
import React from "react";

const Details = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="user">
          <img src="/img/avatar.png" alt="" />
          <h3>Jone Doe</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="info">
          <div className="option">
            <div className="title">
              <span>Chat Settings</span>
              <img src="/img/arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Privacy & Help</span>
              <img src="/img/arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Photos</span>
              <img src="/img/arrowDown.png" alt="" />
            </div>
            <div className="photos">
              <div className="photoItem">
                <div className="photoDetails">
                  <img src="https://via.placeholder.com/40" alt="" />
                  <span>photo_2024_2.png</span>
                </div>
                <img src="/img/download.png" alt="" className="icon" />
              </div>
              <div className="photoItem">
                <div className="photoDetails">
                  <img src="https://via.placeholder.com/40" alt="" />
                  <span>photo_2024_2.png</span>
                </div>
                <img src="/img/download.png" alt="" className="icon" />
              </div>
            </div>
          </div>
          <button className="block" onClick={onClose}>
            Block User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
