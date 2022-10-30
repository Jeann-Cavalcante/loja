import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CarrinhoContextProvider } from "./contexts/CarrinhoContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CarrinhoContextProvider>
        <App />
      </CarrinhoContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
