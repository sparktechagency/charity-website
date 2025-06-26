import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/assets/css/font.css";
import "./pages/dashboard/dashboard.css"
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import "@ant-design/v5-patch-for-react-19";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider  >
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
