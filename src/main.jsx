// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Provider } from 'react-redux'
// import store from './store.js'
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter } from "react-router-dom"; // ← import this

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/e-plantShopping">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
