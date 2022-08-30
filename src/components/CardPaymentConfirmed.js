import {useState} from "react"
import paymentComplete from '../assets/styles/icons/payment-complete.png'
import './CardPaymentConfirmed.css'
import arrow from '../assets/styles/icons/arrow.png'
import completeCheckIcon from '../assets/styles/icons/check_complete_done_green_success_icon (2).png'

function CardPaymentConfirmed() {

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

          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", justifyContent: 'space-around', border: "1px solid black",
            width: "310px", height:"104px", paddingTop: "14px", borderRadius: "10px", marginTop: "12px"}}>
              <div style={{textAlign: "left"}}>
                <h5 style={{marginBottom: "6px"}}>DURATION</h5>
                <h2 style={{fontWeight: "bold"}}>2 H</h2>
              </div>
              <div style={{textAlign: "left", marginLeft: "22px"}}>
                <h5 style={{marginBottom: "6px"}}>TOTAL</h5>
                <h2 style={{fontWeight: "bold"}}><span style={{fontSize: "22px", fontWeight: "400", paddingRight:"8px"}}>R$</span> 15,00</h2>
              </div>
            </div>
          </div>

          {/* <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly",
            width: "240px", marginTop: "80px"}}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "120px"}}>
              <div>
                <p style={{fontSize: "10px", fontWeight: "600"}}>PAYMENT<span style={{fontWeight: "800"}}> SUCCESSFUL</span></p>
              </div>
              <div style={{backgroundColor: "green", width: "80px", height:"80px",
               border: "1px solid green", borderRadius: "50%", paddingTop: "20px"}}>
                <img className="paymentIcon" style={{height:"40px", width: "40px"}}src={paymentComplete} alt="payment-complete"/>
              </div>
            </div>
            <div >
              <div style={{marginTop: "66px", paddingLeft: "34px", paddingRight: "12px"}}>
                <img style={{width: "32px", height: "32px"}}src={arrow} alt="arrow"/>
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center",  width: "120px"}}>
              <div style={{width: "150px", marginLeft: "20px", textIndent: "justify"}}>
                 <p style={{fontSize: "10px", fontWeight: "600"}}>SHOW SCREEN AT CASHIER
                  TO<span style={{fontWeight: "800"}}> CONFIRM CHECK-OUT</span> </p>
              </div>
              <div style={{backgroundColor: "#FED000", width: "82px", height:"82px",
               border: "2px solid black", borderRadius: "50%", paddingTop: "22px", marginLeft: "10px"}}>
                <p style={{fontSize: "12px", fontWeight: "bold", paddingTop: '8px'}}>PENDING</p>
              </div>
              <div style={{width: "150px", marginLeft: "20px", textIndent: "justify", marginTop: '12px'}}>
                <p style={{fontWeight:"bold", fontSize: "12px", marginLeft: "-12px"}}>15 MIN TOLERANCE</p>
                <p style={{fontSize: "7.2px", fontWeight: "300", marginTop: "-8px", marginLeft: "-12px"}}
                >ADDITIONAL HOURLY CHARGES APPLIED, IF <span style={{fontWeight: "bold"}}>CHECK-OUT IS NOT CONFIRMED</span>
                </p>
              </div>
            </div>
          </div> */}
        </div>

        <div style={{marginTop: "44px"}}>
          <div style={{marginBottom: "18px"}}>
            <h4 style={{fontSize: "22px", fontWeight: "500"}}>CHECK-OUT CONFIRMED!</h4>
          </div>
          <div>
            <img style={{width: "200px", height: "200px"}} src={completeCheckIcon} alt="paycompleteIcon"/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CardPaymentConfirmed;
