// import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import "./index.css";
import Chat from "./components/Chat/Chat";
import Details from "./components/details/Details";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";

function App() {
  const user = false;
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container__app gap-0 gap-lg-4">
      {user ? (
        <>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === 1 ? (
            <Home />
          ) : (
            <>
              <List />
              <Chat />
            </>
          )}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
}

export default App;
