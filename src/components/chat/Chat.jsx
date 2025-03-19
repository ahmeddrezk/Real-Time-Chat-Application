import "./chat.css";
import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import Details from "../details/Details";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState();
  const [showDetails, setShowDetails] = useState(false);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handelEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      {showDetails && <Details onClose={() => setShowDetails(false)} />}

      <div className="top">
        <div className="user">
          <img
            src="/img/avatar.png"
            alt="User Avatar"
            onClick={() => setShowDetails(true)}
          />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="icons">
          <img src="/img/phone.png" alt="" />
          <img src="/img/video.png" alt="" />
          <img src="/img/more.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="/img/avatar.png" alt="" />
          <div className="texts">
            <p>Hi, how are you?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRkS_4kbpxDtypCCCVrwMCraMBa-IP1YKo0g&s"
              alt=""
            />
            <p>Hi, how are you?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/img/avatar.png" alt="" />
          <div className="texts">
            <p>Hi, how are you?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Hi, how are you?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/img/avatar.png" alt="" />
          <div className="texts">
            <p>Hi, how are you?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Hi, how are you?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/img/avatar.png" alt="" />
          <div className="texts">
            <p>Hi, how are you?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="" ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="/img/img.png" alt="" />
          <img src="/img/attach.png" alt="" />
          <img src="/img/mic.png" alt="" />
        </div>
        <input
          className="sendInput"
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="/img/emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handelEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
