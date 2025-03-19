import React, { useState } from "react";
import "./editProfile.css";

const EditProfile = ({ option, setSelectedOption }) => {
  const [inputValue, setInputValue] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setInputValue(file.name);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (option === "password") {
      if (newPassword.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
      if (newPassword !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      alert("Password updated successfully!");
    } else {
      alert(`${option} updated to: ${inputValue}`);
    }
    setSelectedOption(null);
  };

  return (
    <div className="edit-profile">
      <h3>
        {option === "profile"
          ? "Edit Profile Picture"
          : option === "name"
          ? "Edit Name"
          : option === "email"
          ? "Edit Email"
          : "Change Password"}
      </h3>

      {option === "profile" ? (
        <>
          {preview && (
            <img
              src={preview}
              alt="Profile Preview"
              className="profile-preview"
            />
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </>
      ) : option === "password" ? (
        <>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🔒"}
            </span>
          </div>

          <div className="password-field">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "👁️" : "🔒"}
            </span>
          </div>

          {error && <p className="error-message">{error}</p>}
        </>
      ) : (
        <input
          type="text"
          placeholder={`Enter new ${option}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}

      <button onClick={handleSave}>Save</button>
      <button onClick={() => setSelectedOption(null)}>Back</button>
    </div>
  );
};

export default EditProfile;
