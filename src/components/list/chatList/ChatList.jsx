import AddUser from "../../home/addUser/AddUser";
import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatlist">
      <div className="chatlist__header">People</div>
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

export default ChatList;
