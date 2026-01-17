import { useContext, useState } from "react";
import "./App.css";
import { useNotification } from "./components/NotificationProvider";

function App() {
  const {notify} = useNotification()
  const handleSuccess = () => {
    notify({
      message: "Profile updated successfully",
      type: "success",
    });
  };
  const handleError = () => {
    notify({
      message: "Profile updated failed",
      type: "error",
    });
  };

  return (
    <div>
      <button
        onClick={handleSuccess}
        className="toast-success"
        style={{ marginRight: "10px" }}
      >
        Success
      </button>
      <button onClick={handleError} className="toast-error">
        Error
      </button>
    </div>
  );
}

export default App;
