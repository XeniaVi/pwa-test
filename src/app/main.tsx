import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import "./index.css";
import { router } from "./router.tsx";
import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
  registerSW({
    onOfflineReady() {
      console.log("offline ready");
    },
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
