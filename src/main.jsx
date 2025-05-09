import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NotificationProvider } from "../src/Context/NotificationContext.jsx";
import { UserProvider } from "./Context/UserContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
    <NotificationProvider>
      <App />
    </NotificationProvider>
    </UserProvider>
  </StrictMode>
);
