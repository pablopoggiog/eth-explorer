import React from "react";
import { render } from "react-dom";
import { positions, Provider as AlertProvider } from "react-alert";
// @ts-ignore
import AlertTemplate from "react-alert-template-oldschool-dark";
import { EthereumContextProvider } from "src/contexts";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const alertOptions = {
  timeout: 10000,
  position: positions.BOTTOM_CENTER,
};

render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <EthereumContextProvider>
        <App />
      </EthereumContextProvider>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
