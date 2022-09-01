import "./SearchReservation.css"

import {useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import apiService from '../services/api.service'



function SearchReservation() {

  const guestUserPhone = useRef()
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault()
    try{
      const reservation = await apiService.getAReservation(guestUserPhone.current.value)
      //add validations 
      navigate(`/reservations/${reservation.guestUserPhone}` )
    }catch(err){
      console.log(err)
      setError(err.response.data.msg)
    } 
  }

  return (
    <div className="text-center">
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "220px"}}>
        <div>
          <h4 style={{fontWeight: "bold"}}>VIEW YOUR TICKET</h4>
        </div>
        <div style={{marginTop: "14px"}}>
          <form onSubmit={submitHandler}>
            <div>
                      <input className="badge-pill"
                        style={{width:"260px", height: "50px", textAlign: "center", fontSize: "20px", fontWeight: "bold"}}
                        placeholder = "Cel Number"
                        type="number"
                        name="guestUserPhone"
                        ref={guestUserPhone}
                      />
            </div>
            <div>
              <button className="badge-pill"
              style={{width: "200px", height: "50px", backgroundColor: "black",
               border: "1px solid black", color: "white", marginTop: "100px", fontSize: "22px", fontWeight: '300'}}
              >FIND</button>
            </div>
            <div className="error-container">
              {error !== "" && <p>{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

export default  SearchReservation;
