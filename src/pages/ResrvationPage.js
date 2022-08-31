import React from "react";
import CheckInForm from "../components/CheckInForm"

function ReservationPage() {



  return (
    <div className="text-center">

      <div className="d-flex flex-column align-items-center">

        <div>
          <CheckInForm/>
        </div>
        {/* <div>
          <InitiateCheckOut/>
        </div> */}
        {/* <div>
          <ReservationCheckOut/>
        </div> */}
        {/* <div>
          <CardPaymentConfirmed/>
        </div> */}



      </div>
    </div>
  );
}

export default ReservationPage;
