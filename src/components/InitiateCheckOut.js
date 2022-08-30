import {useState} from "react"

function InitiateCheckOut() {

  const [guestUserPhone, setGuestUserPhone] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [licensePlate, setLicensePlate] = useState('')
  const [vehicleDescription, setVehicleDescription] = useState('')

  return (
    <div className="text-center">

      <div className="d-flex flex-column align-items-center">
        <div style={{marginTop: "50px"}}>
          <h3 style={{fontWeight: "bold", fontSize: "24px"}}>TICKET# wHw3y</h3>
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <div style={{marginTop: "30px"}}>
            <input className="badge-pill"
              style={{border: "1px solid black", width: "220px", height: "44px", textAlign: "center"}}
              placeholder = "CellPhone Number"
              type="number"
              name="GuestUserPhone"
              defaultValue={guestUserPhone}
            />

          </div>
          <div style={{marginTop: "54px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{color: "#FED000", backgroundColor: "black", width: "200px", height: "50px",
             textAlign: "center", border: "1px solid black", borderRadius: "10px", paddingTop:"4px", paddingBottom:"8px"}}>
              <h3>ACTIVE</h3>
              {/* <h1>{reservation.status !== "CLOSED" ? "ACTIVE" : "CLOSED"}</h1> */}
            </div>
          </div>
          <div style={{marginTop: "8px"}}>
            <div style={{border: "1px solid black", width: "200px", height: "122px", borderRadius: "12px"}}>
              <h3 style={{fontSize: "18px", paddingTop: "8px", fontWeight: "500"}}>CHECK-IN</h3>
              <h3 style={{fontSize: "42px", fontWeight: "bold", marginTop: "-5px"}}>18 : 22</h3>
              <h3 style={{fontSize: "14px", color: "grey",  fontWeight: "300"}}>22/09/22</h3>
            </div>

          </div>
          <div style={{marginTop: "44px"}}>
            <input className="badge-pill"
              style={{border: "1px solid black", width: "220px", height: "50px", textAlign: "center"}}
              placeholder = "MOTORBIKE | ABC-1234"
              type="text"
              name="TypeANDLicensePlate"
              defaultValue={`${vehicleType} | ${licensePlate}`}
            />
          </div>
          <div style={{marginTop: "10px"}}>
            <input className="badge-pill"
              style={{border: "1px solid black", width: "220px", height: "50px", textAlign: "center"}}
              placeholder = "VW JETTA PRETO"
              type="text"
              name="vehicleDescription"
              defaultValue={vehicleDescription}
            />
          </div>
          <div style={{marginTop: "72px"}}>
            <button className="badge-pill"
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
