import Header from "./Header";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import LogoutButton from "./LogoutButton";

const Settings = () => {
  const [notification, setNotification] = useState(false);
  const [frequency, setFrequency] = useState(0);

  const handleClick = () => {
    alert("Settings saved");
    // Clear previous interval
    for (let i = 0; i < 100; i++) {
      window.clearInterval(i);
    }
    if (!notification) return;
    setInterval(pushNotification, frequency);
  };

  const pushNotification = () => {
    Notification.requestPermission().then(function (result) {
      new Notification("Time to breath - Zen Desk");
    });
  };

  async function getUserData() {
    const data = await fetch("http://localhost:3000/zendesk");
    const response = await data.json();
    console.log(response);
    // setNotification(response.notify);
    // setFrequency(response.freq);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <Header />
      <div className="main">
        <LogoutButton />
        <div className="themes-container">
          <div>
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              value={notification}
              onChange={() => setNotification(!notification)}
              defaultChecked={notification ? true : false}
            />
            <label htmlFor="html">Notifications</label>
            {notification && (
              <>
                <input
                  type="radio"
                  id="frequency"
                  name="frequency"
                  value={frequency}
                  onChange={() => setFrequency(10000)}
                />
                <label htmlFor="html">10 seconds</label>
                <input
                  type="radio"
                  id="frequency"
                  name="frequency"
                  value={frequency}
                  onChange={() => setFrequency(30000)}
                />
                <label htmlFor="html">30 seconds</label>
              </>
            )}
          </div>
          <button onClick={handleClick}>Save</button>
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Settings;
