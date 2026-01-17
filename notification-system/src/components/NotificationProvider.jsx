import React, { createContext, useContext, useState } from "react";
import NotificationContainer from "./NotificationContainer";

export const NotificationContext = createContext(null);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be within NotificationProvider");
  }
  return context;
};
const NotificationProvider = ({ children, position = "top-right" }) => {
  const [notifications, setNotifications] = useState([]);

  const notify = ({ message, type = "warning", duration = 3000 }) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    if (duration) {
      setTimeout(() => {
        remove(id);
      }, duration);
    }
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
