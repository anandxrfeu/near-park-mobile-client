import {useState} from "react"
import {useParams, useNavigate} from 'react-router-dom'
import apiService from "../services/api.service"

function CheckInForm() {
  const {id} = useParams()

  const [guestUserPhone, setGuestUserPhone] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [LicensePlate, setLicensePlate] = useState('')
  const [vehicleDescription, setVehicleDescription] = useState('')

  const navigate = useNavigate()

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const payload = {
      vehicle: {
        type: vehicleType,
        licensePlate: LicensePlate,
        description: vehicleDescription
      },
      guestUserPhone: guestUserPhone,
      parkingLot: id
        }
        console.log("payload", payload)
        try {
           const reservation = await apiService.createReservation(payload)
           console.log(reservation)
           if (reservation.guestUserPhone){
            navigate(`/reservations/${guestUserPhone}`)
           }
        } catch (err) {
          console.log(err)
        }

  }




  return (
    <div className="text-center">
      <form onSubmit={onSubmitHandler}>

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
                onChange={(e) => setGuestUserPhone(e.target.value) }
                value={guestUserPhone}
              />

            </div>

            <div style={{marginTop: "8px"}}>
            <div style={{marginTop: "30px"}}>
              <input className="badge-pill"
                style={{border: "1px solid black", width: "220px", height: "44px", textAlign: "center"}}
                placeholder = "License Plate"
                type="text"
                name="LicensePlate"
                onChange={(e) => setLicensePlate(e.target.value) }
                value={LicensePlate}
              />

            </div>

            </div>
            <div style={{marginTop: "40px"}} >
              <select value={vehicleType} className="form-select badge-pill"
                style={{border: "1px solid black", width: "220px", height: "50px", textAlign: "center"}}
              onChange={(e) => setVehicleType(e.target.value) }>
                <option selected>VEHICLE TYPE</option>
                <option value="CAR">Carro</option>
                <option value="MOTORBIKE">Moto</option>
              </select>
            </div>

            <div style={{marginTop: "10px"}}>
              <input className="badge-pill"
                style={{border: "1px solid black", width: "220px", height: "50px", textAlign: "center"}}
                placeholder = "VW JETTA PRETO"
                type="text"
                name="vehicleDescription"
                onChange={(e) => setVehicleDescription(e.target.value) }
                value={vehicleDescription}
              />
            </div>
            <div style={{marginTop: "72px"}}>
              <button className="badge-pill"
              style={{border: "1px solid black", width: "240px", height: "50px", backgroundColor: "green", color: "white"}}
              >CONFIRM</button>
            </div>




          </div>

          </div>
      </form>
    </div>
  );
}

export default CheckInForm;
