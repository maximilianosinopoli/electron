import { useState, useEffect } from "react";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Menu from "./Menu";
import Header from "./Header";
import "./App.scss";

function zendesk() {
  const { isLoading } = useAuth0();
  const [notify, setNotify] = useState(0);

  useEffect(() => {
    if (notify !== 0) {
      setInterval(pushNotification, notify);
    }
  }, []);

  const handleClick = () => {
    // Clear previous interval
    for (let i = 0; i < 100; i++) {
      window.clearInterval(i);
    }
    setInterval(pushNotification, notify);
  };

  const pushNotification = () => {
    Notification.requestPermission().then(function (result) {
      new Notification("Time to breath - Zen Desk");
    });
  };

  return (
    <div>
      <Header />
      <div className="main">
        <LogoutButton />
        {isLoading ? <div>Loading ...</div> : <Profile />}
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}

export default zendesk;
