import React, { useState } from "react";
import "./Sidebar.css";
import SettingsPopup from "../settings/settingsPopup/SettingsPopup";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [showSettings, setShowSettings] = useState(false);

  const topItems = [
    { id: 1, img: "/img/home.png", alt: "Home" },
    { id: 2, img: "/img/chat.png", alt: "Chat" },
  ];

  const bottomItems = [
    {
      id: 4,
      img: "/img/setting.png",
      alt: "Settings",
      action: () => setShowSettings(!showSettings),
    },
    { id: 5, img: "/img/out.png", alt: "Logout" },
  ];

  return (
    <div className="sidebar">
      <div className="profile">
        <img src="/img/avatar.png" alt="Profile" className="profile-pic" />
      </div>

      <div className="menu menu-top">
        {topItems.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => setActiveTab(item.id)}
          >
            <img src={item.img} alt={item.alt} className="icon" />
            {activeTab === item.id && <span className="indicator"></span>}
          </div>
        ))}
      </div>

      <div className="menu menu-bottom">
        {bottomItems.map((item) => (
          <div key={item.id} className="menu-item" onClick={item.action}>
            <img src={item.img} alt={item.alt} className="icon" />
          </div>
        ))}
      </div>

      {showSettings && <SettingsPopup setShowSettings={setShowSettings} />}
    </div>
  );
};

export default Sidebar;
