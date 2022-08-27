import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import PrivateRoute from '../pages/auth/PrivateRoute'
import PrivatePage from "../pages/PrivatePage";
import { AuthContextComponent } from "../contexts/authContext";


function App() {
  return (
        <Routes>
          <Route path="/client">
            <Route path='parkinglots/:id' element={<Home />} />
           
          </Route>
        </Routes>
  );
}

export default App;
