import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import ParkingLotPage from "../pages/ParkingLotPage";
import ReservationPage from "../pages/ResrvationPage";
import OneReservationPage from '../pages/OneReservationPage'


function App() {
  return (
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path="/parkinglots">
                <Route path=':id' element={<ParkingLotPage />} />
                <Route path=':id/reservation' element={<ReservationPage />} />
            </Route>
              <Route path="/reservations/:phoneNumber" element={<OneReservationPage/>}>

              </Route>




        </Routes>
  );
}

export default App;
