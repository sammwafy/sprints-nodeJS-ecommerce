/** @format */

import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { AuthProvider } from "./context/AuthProvider";
import { CookiesProvider } from 'react-cookie';
const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <AuthProvider>
    <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
    </Provider>
  </AuthProvider>
);

/** old method in react 17 and below */
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
