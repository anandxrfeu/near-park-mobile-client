import {useState} from 'react'
import './PaymentCard.css'

const PaymentCard = (props) => {
    const {guestReservation, makePayment} = props

    const [cardNumber, setCardNumber] = useState()

    const [expirationMonth, setExpirationMonth] = useState()
    const [expirationYear, setExpirationYear] = useState()
    const [ cvc, setCvc] = useState()
    const [ owner, setOwner] = useState()



    return (
      <div className="text-center">

        <div className="d-flex flex-column align-items-center">
          <div style={{marginTop: "50px"}}>
            <h3 style={{fontWeight: "bold", fontSize: "24px"}}>TICKET# {guestReservation.ticket}</h3>
          </div>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{marginTop: "46px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <div style={{color: "#FED000", backgroundColor: "black", width: "200px", height: "50px",
               textAlign: "center", border: "1px solid black", borderRadius: "10px", paddingTop:"6px", paddingBottom:"8px"}}>
                <h3>{guestReservation.status !== "CLOSED" ? "ACTIVE" : "CLOSED"}</h3>
             </div>
            </div>
            <div>
              <div style={{width: " 340px", height: "210px", borderRadius:"12px", border: "2px solid black", marginTop:'90px',
               display: "flex", flexDirection:"column", alignItems: "center", justifyContent:"space-evenly"}}>
                <div style={{marginTop: "26px"}}>
                  <input className="badge-pill"
                  style={{border: "1px solid grey", width: "310px", height: "44px", textAlign: "center"}}
                  placeholder = "Enter your Card Number"
                  type="number"
                  name="cardNumber"
                  onChange={(e) => setCardNumber(e.target.value) }
                  value={cardNumber}
                />
                </div>
                <div>
                <div style={{display: "flex", flexDirection: "column", justifyContent:"space-between"}}>
                  <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
                    <div>
                      <input className="badge-pill"
                      style={{border: "1px solid grey", width: "230px", height: "44px", textAlign: "center"}}
                      placeholder = "Enter your Name"
                      type="text"
                      name="owner"
                      onChange={(e) => setOwner(e.target.value) }
                      value={owner}
                    />
                    </div>
                    <div style={{marginLeft:"12px",}}>
                        <input className="badge-pill"
                        style={{border: "1px solid grey", width: "70px", height: "44px", textAlign: "center"}}
                        placeholder = "CVC"
                        type="number"
                        name="cvc"
                        onChange={(e) => setCvc(e.target.value) }
                        value={cvc}
                        />
                    </div>

                  </div>
                  <div style={{display: "flex", flexDirection: "row",  justifyContent: "left", marginTop:"9px"}}>
                    <div >
                      <input className="badge-pill"
                      style={{border: "1px solid grey", width: "60px", height: "44px", textAlign: "center"}}
                      placeholder = "MM"
                      type="number"
                      name="expirationMonth"
                      onChange={(e) => setExpirationMonth(e.target.value) }
                      value={expirationMonth}
                      />
                    </div>
                    <div style={{marginLeft: "6px"}}>
                      <input className="badge-pill"
                      style={{border: "1px solid grey", width: "60px", height: "44px", textAlign: "center"}}
                      placeholder = "YY"
                      type="number"
                      name="expirationYear"
                      onChange={(e) => setExpirationYear(e.target.value) }
                      value={expirationYear}
                      />

                    </div>

                  </div>

                </div>


                </div>

              </div>


                  {/* <div className="Cards">
                      <div>
                        <p>MercadoPago</p>
                      </div>
                      <div className = "Info">
                        <p id="Number">{cardNumber}</p>
                        <div className="DatesandBank">
                          <p>Expires {expirationMonth}/{expirationYear}</p>
                          <p>{cvc}</p>
                        </div>
                        <p id="Owner">{owner}</p>
                      </div>

                    </div> */}





            </div>
            <div style={{marginTop: "40px"}}>
               <button style={{backgroundColor: "black", color: "white", border:"1px solid black", width:"140px", height:"60px", fontSize:"22px"}}

               className="badge-pill" onClick={makePayment}>Pay</button>
            </div>


          </div>
        </div>
      </div>
    );
}


export default PaymentCard;
