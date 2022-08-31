
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

            <button className="badge-pill" onClick={makePayment}>Pay</button>

          </div>
        </div>
      </div>
    );
}


export default PaymentCard;