import {useState} from "react"

function ReservationCheckOut() {

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
          <div style={{marginTop: "16px"}}>
            <input className="badge-pill"
              style={{border: "1px solid black", width: "240px", height: "50px", textAlign: "center"}}
              placeholder = "CellPhone Number"
              type="number"
              name="GuestUserPhone"
              defaultValue={guestUserPhone}
            />
          </div>
          <div style={{marginTop: "12px"}}>
            <input className="badge-pill"
              style={{border: "1px solid black", width: "240px", height: "50px", textAlign: "center"}}
              placeholder = "MOTORBIKE | ABC-1234"
              type="text"
              name="TypeANDLicensePlate"
              defaultValue={`${vehicleType} | ${licensePlate}`}
            />
          </div>
          <div style={{marginTop: "46px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{color: "#FED000", backgroundColor: "black", width: "200px", height: "50px",
             textAlign: "center", border: "1px solid black", borderRadius: "10px", paddingTop:"6px", paddingBottom:"8px"}}>
              <h3>ACTIVE</h3>
              {/* <h1>{reservation.status !== "CLOSED" ? "ACTIVE" : "CLOSED"}</h1> */}
            </div>
          </div>
          <div style={{marginTop: "16px", display: "flex", flexDirection: "row",
          border: "1px solid black", width: "310px", height: "112px", borderRadius: "12px", justifyContent: "space-around"}}>
            <div>
              <h3 style={{fontSize: "14px", paddingTop: "12px", fontWeight: "400"}}>CHECK-IN</h3>
              <h3 style={{fontSize: "32px", fontWeight: "bold", marginTop: "-2px"}}>18:22</h3>
              <h3 style={{fontSize: "12px", color: "grey",  fontWeight: "300", marginTop: "-2px" }}>22/09/22</h3>
            </div>
            <div>
              <h3 style={{fontSize: "14px", paddingTop: "12px", fontWeight: "400"}}>CHECK-OUT</h3>
              <h3 style={{fontSize: "32px", fontWeight: "bold", marginTop: "-2px"}}>20:22</h3>
              <h3 style={{fontSize: "12px", color: "grey",  fontWeight: "300", marginTop: "-2px"}}>22/09/22</h3>
            </div>

          </div>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", justifyContent: 'space-around', border: "1px solid black",
            width: "310px", height:"100px", paddingTop: "14px", borderRadius: "10px", marginTop: "12px"}}>
              <div style={{textAlign: "left"}}>
                <h5 style={{marginBottom: "6px"}}>DURATION</h5>
                <h2 style={{fontWeight: "bold"}}>2 H</h2>
              </div>
              <div style={{textAlign: "left"}}>
                <h5 style={{marginBottom: "6px"}}>TOTAL</h5>
                <h2 style={{fontWeight: "bold"}}><span style={{fontSize: "22px", fontWeight: "400", paddingRight:"8px"}}>R$</span> 15,00</h2>
              </div>
            </div>
          </div>

          {/* <div style={{marginTop: "72px"}}>
            <button className="badge-pill"
            style={{border: "1px solid black", width: "240px", height: "50px", backgroundColor: "black", color: "white"}}
            >PAYMENT</button>
          </div> */}
          {/* <div style={{marginTop: "72px", width: "280px", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
            <div>
              <button className="badge-pill"
              style={{border: "1px solid black", height: "50px", width: "132px", backgroundColor: "black", color: "white"}}
              >CARD</button>
            </div>
            <div>
              <button className="badge-pill"
              style={{border: "1px solid black", height: "50px", width: "132px", backgroundColor: "black", color: "white"}}
              >CASH</button>
            </div>
          </div> */}
          <div style={{marginTop: "38px"}}>
            <h4 style={{fontWeight: "500", fontSize: "18px"}}>PAYMENT TYPE</h4>
            <div style={{border: "1px solid black", borderRadius: "8px",
            textAlign: "center", width: "146px", height: "66px", marginTop: "20px"}}>
              <h3 style={{paddingTop: "14px", fontWeight: "bold"}}>CASH</h3>
            </div>
          </div>




        </div>

        <div>
        </div>


      </div>
    </div>
  );
}

export default ReservationCheckOut;
