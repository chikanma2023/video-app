import "@/global-shim";
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import router from "./App";
import "./Tailwind.css";
import { ThemeProvider } from "./context/themeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>
);
