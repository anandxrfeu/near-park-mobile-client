import {useState} from 'react'



function TicketAndPhoneFind() {

  const [guestUserPhone, setGuestUserPhone] = useState('')

  return (
    <div className="text-center">
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "220px"}}>
        <div>
          <h4 style={{fontWeight: "bold"}}>VIEW YOUR TICKET</h4>
        </div>
        <div style={{marginTop: "14px"}}>
          <form>
            <div>
                      <input className="badge-pill"
                        style={{width:"260px", height: "50px", textAlign: "center", fontSize: "20px", fontWeight: "bold"}}
                        placeholder = "Cel Number"
                        type="number"
                        name="guestUserPhone"
                        onChange={(e) => setGuestUserPhone(e.target.value)}
                        value={guestUserPhone}
                      />
            </div>
            <div>
              <button className="badge-pill"
              style={{width: "200px", height: "50px", backgroundColor: "black",
               border: "1px solid black", color: "white", marginTop: "100px", fontSize: "22px", fontWeight: '300'}}
              >FIND</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

export default  TicketAndPhoneFind;
