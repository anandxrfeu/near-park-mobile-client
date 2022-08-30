import React from "react";
import { Link } from "react-router-dom";
import GenerateTicket from "../components/GenerateTicket";
import TicketAndPhoneFind from "../components/TicketAndPhoneFind"

function ParkingLotPage() {

// const searchReservation = (searchText) => {
//     let  filteredReservationList  = []
//     if(searchText && isLetter(searchText[0])){
//       filteredReservationList = reservationList.filter(resrvtn => {
//         return resrvtn.vehicle.licensePlate.toLowerCase().startsWith(searchText.toLowerCase())
//       })
//     }else{
//       filteredReservationList = reservationList.filter(resrvtn => {
//         return resrvtn.guestUserPhone.startsWith(searchText)
//       })
//     }
//     setReservationListFiltered(filteredReservationList)

//   }

//   function isLetter(c) {
//     return c.toLowerCase() !== c.toUpperCase();
//   }

  return (
    <div className="text-center">
      <div className="d-flex flex-column align-items-center">
        {/* <div>
          <GenerateTicket/>
        </div> */}
        {/* <div>
          <TicketAndPhoneFind/>
        </div> */}


      </div>
    </div>
  );
}

export default ParkingLotPage;
