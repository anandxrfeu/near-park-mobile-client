

function InitiateCheckOut(props) {

  const {onCheckOut, guestReservation} = props

  return (
    <div className="text-center">

      <div className="d-flex flex-column align-items-center">
        <div style={{marginTop: "50px"}}>
          <h3 style={{fontWeight: "bold", fontSize: "24px"}}>TICKET<span
          style={{marginLeft:"4px", border:"1px solid black", padding:"4px", borderRadius: "8px"}}
          >{guestReservation && `${guestReservation.ticket}`}</span></h3>
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <div style={{marginTop: "30px"}}>
            <input className="badge-pill"
              style={{border: "1px solid black", width: "220px", height: "44px", textAlign: "center"}}
              placeholder = "CellPhone Number"
              type="number"
              name="GuestUserPhone"
              defaultValue={guestReservation.guestUserPhone}
            />

          </div>
          <div style={{marginTop: "54px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{color: "#FED000", backgroundColor: "black", width: "200px", height: "50px",
             textAlign: "center", border: "1px solid black", borderRadius: "10px", paddingTop:"4px", paddingBottom:"8px"}}>
              <h3>{guestReservation.status !== "CLOSED" ? "ACTIVE" : "CLOSED"}</h3>
            </div>
          </div>
          <div style={{marginTop: "8px"}}>
            <div style={{border: "1px solid black", width: "200px", height: "122px", borderRadius: "12px"}}>
              <h3 style={{fontSize: "18px", paddingTop: "8px", fontWeight: "500"}}>CHECK-IN</h3>
              <h3 style={{fontSize: "42px", fontWeight: "bold", marginTop: "-5px"}}>{guestReservation && guestReservation.startTime}</h3>
              <h3 style={{fontSize: "14px", color: "grey",  fontWeight: "300"}}>{guestReservation && guestReservation.startDate}</h3>
            </div>

          </div>
          <div style={{marginTop: "44px"}}>
            <input className="badge-pill"
              style={{border: "1px solid black", width: "220px", height: "50px", textAlign: "center"}}
              placeholder = "MOTORBIKE | ABC-1234"
              type="text"
              name="TypeANDLicensePlate"
              defaultValue={`${guestReservation.vehicle.vehicleType} | ${guestReservation.vehicle.licensePlate}`}
            />
          </div>
          <div style={{marginTop: "10px"}}>
            <input className="badge-pill"
              style={{border: "1px solid black", width: "220px", height: "50px", textAlign: "center"}}
              placeholder = "VW JETTA PRETO"
              type="text"
              name="vehicleDescription"
              defaultValue={guestReservation.vehicle.vehicleDescription}
            />
          </div>
          <div style={{marginTop: "72px"}}>
            <button className="badge-pill"
            onClick={onCheckOut}
            style={{border: "1px solid black", width: "240px", height: "50px", backgroundColor: "green", color: "white"}}
            >CHECK-OUT</button>
          </div>




        </div>

        <div>
        </div>


      </div>
    </div>
  );
}

export default InitiateCheckOut;
