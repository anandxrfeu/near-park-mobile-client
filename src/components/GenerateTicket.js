import React from "react";
import { Link } from "react-router-dom";

function GenerateTicket(props) {
  const {pricing} = props

  return (
    <div style={{display: "flex",
        flexDirection: "column", alignItems: "center"}}>
        <div>
          <h2  className="text-center" style={{marginTop: "80px"}}>Iron Park HQ</h2>
        </div>
        <div style={{border: "1px solid black", display: "flex",
        flexDirection: "column",
         borderRadius: "12px", marginTop: "80px", width: "310px", paddingTop: "20px",
         paddingBottom: "20px" , height: "264px"}}>
          <div className="text-center">
            <h3 style={{fontSize: "26px", fontWeight: "bold", marginTop: "-5px"}}>PRICING TABLE</h3>
          </div>
          <div style={{display: "flex", flexDirection: "row", marginTop: "28px", justifyContent: "space-around"}}>
              <div  style={{display: "flex", flexDirection: "column", textAlign: "left", fontWeight: "light"}} >
                <p style={{marginTop:"5px"}}>1 HR</p>
                <p>1 HR (Adicional)</p>
                <p>8 HR</p>
                <p>24 HR</p>
              </div>
              <div  style={{display: "flex", flexDirection: "column", textAlign: "left"}}>
                <p>R$<span style={{fontWeight:"bold", fontSize: "18px", marginLeft: " 2px"}}>{pricing.oneHourPrice}</span></p>
                <p>R$<span style={{fontWeight:"bold", fontSize: "18px", marginLeft: " 2px"}}>{pricing.oneHourAdditionalPrice}</span></p>
                <p>R$<span style={{fontWeight:"bold", fontSize: "18px", marginLeft: " 2px"}}>{pricing.eightHourPrice}</span></p>
                <p>R$<span style={{fontWeight:"bold", fontSize: "18px", marginLeft: " 2px"}}>{pricing.twentyFourHourPrice}</span></p>
              </div>

          </div>
        </div>
        <div>
          <Link to="reservation">
              <button className="badge-pill"
              style={{width: "240px", height: "60px", backgroundColor: "black",
              border: "1px solid black", color: "white", marginTop: "130px"
            }}
              >
                GENERATE TICKET
              </button>
          </Link>
        </div>


      <div className="d-flex flex-column align-items-center">

      </div>
    </div>
  );
}

export default GenerateTicket;
