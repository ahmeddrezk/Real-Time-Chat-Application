import "./groupList.css";
import React from "react";

const GroupList = () => {
  return (
    <div className="grouplist">
      <div className="grouplist__header">Group</div>
      <div className="item">
        <img src="/img/avatar.png" alt="" />
        <div className="text">
          <div className="top">
            <span className="name">John Doe</span>
            <div className="time">Today, 9.52pm</div>
          </div>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/img/avatar.png" alt="" />
        <div className="text">
          <div className="top">
            <span className="name">John Doe</span>
            <div className="time">Today, 9.52pm</div>
          </div>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/img/avatar.png" alt="" />
        <div className="text">
          <div className="top">
            <span className="name">John Doe</span>
            <div className="time">Today, 9.52pm</div>
          </div>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
