import React from "react";
import "./Home.css";
import AddUser from "./addUser/AddUser";
import SearchUser from "../list/searchUser/searchUser";

const Home = () => {
  return (
    <div className="home-container d-flex flex-column align-items-center justify-content-center text-center">
      <img src="/img/chat-icon.png" alt="Chat Banner" className="chat-image" />
      <h2 className="title">Let's Talk</h2>
      {/* <SearchUser /> */}
      {/* <AddUser /> */}
      <div className="btns d-flex flex-column flex-md-row">
        <button className="add-user-btn">Add User</button>
        <button className="create-group-btn">Create Group</button>
      </div>
    </div>
  );
};

export default Home;
