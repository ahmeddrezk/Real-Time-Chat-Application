import "./list.css";
import React from "react";
import Userinfo from "./userinfo/Userinfo";
import ChatList from "./chatList/ChatList";
import GroupList from "./groupList/GroupList";
import SearchUser from "./searchUser/searchUser";

const List = () => {
  return (
    <div className="list">
      <SearchUser />
      <GroupList />
      <ChatList />
    </div>
  );
};

export default List;
