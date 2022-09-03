import "./PaymentCard.css"

const PaymentCard = (props) => {
    const {guestReservation, makePayment} = props

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

            <div className="credit-card-box">

                <div className="credit-card-row" >
                  <h3 >Payment Details</h3>
                </div>

                <form id="payment-form" onSubmit={makePayment}>

                  <div className="credit-card-row">
                          <div className="input-group">
                            <input
                            type="tel"
                            maxLength="16"
                            className="form-control"
                            name="cardNumber"
                            placeholder="Valid Card Number"
                            autoComplete="cc-number"
                            required autoFocus
                            />
                          </div>
                  </div>

                  <div className="credit-card-row">
                          <div className="input-group">
                            <input
                            type="text"
                            className="form-control"
                            name="fulName"
                            placeholder="Full Name"
                            required autoFocus
                            />
                          </div>
                  </div>

                  <div className="credit-card-row expiry-cv">

                      <div className="card-expiry">
                          <input
                          type="tel"
                          className="form-control"
                          name="cardExpiry"
                          placeholder="MM / YY"
                          autoComplete="cc-exp"
                          required
                          />
                      </div>

                      <div className="card-cvc">
                          <input
                          type="tel"
                          className="form-control"
                          name="cardCVC"
                          placeholder="CVC"
                          autoComplete="cc-csc"
                          required
                          />
                      </div>

                  </div>


                  <div className="credit-card-row">
                        <button className="btn btn-success btn-lg btn-block" type="submit">Pay</button>
                  </div>


                </form>
            </div>

          </div>
        </div>
      </div>
    );
}


export default PaymentCard;
