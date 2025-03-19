import React, { useState } from "react";
import "./settingsPopup.css";
import EditProfile from "../editProfile/EditProfile";

const SettingsPopup = ({ setShowSettings }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="settings-popup">
      {!selectedOption ? (
        <>
          <h3>Settings</h3>
          <ul>
            <li onClick={() => setSelectedOption("profile")}>
              Edit Profile Picture
            </li>
            <li onClick={() => setSelectedOption("name")}>Edit Name</li>
            <li onClick={() => setSelectedOption("email")}>Edit Email</li>
            <li onClick={() => setSelectedOption("password")}>
              Change Password
            </li>{" "}
            {/* ✅ إضافة خيار تغيير الباسوورد */}
          </ul>
          <button className="close-btn" onClick={() => setShowSettings(false)}>
            Close
          </button>
        </>
      ) : (
        <EditProfile
          option={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      )}
    </div>
  );
};

export default SettingsPopup;
