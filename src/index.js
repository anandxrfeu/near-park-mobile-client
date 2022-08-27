import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextComponent } from "./contexts/authContext";


ReactDOM.render(
  <AuthContextComponent>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </AuthContextComponent>,
  document.getElementById("root")
 );