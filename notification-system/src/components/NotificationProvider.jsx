import React, { createContext, useState } from "react";
import NotificationContainer from "./NotificationContainer";

export const NotificationContext = createContext(null);

const NotificationProvider = ({ children, position = "top-right" }) => {
  const [notifications, setNotifications] = useState([]);

  const notify = ({ message, type = "warning", duration = 3000 }) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      remove(id);
    }, duration);
  };

  const remove = (id) => {
    setNotifications((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <NotificationContainer
        notifications={notifications}
        onClose={remove}
        position={position}
      />
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
