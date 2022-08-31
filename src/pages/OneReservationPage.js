import React, {useState} from "react";
import { Link } from "react-router-dom";
import InitiateCheckOut from "../components/InitiateCheckOut";
import ReservationCheckOut from "../components/ReservationCheckOut";
import CardPaymentConfirmed from "../components/CardPaymentConfirmed"

function OneReservationPage() {
  console.log("in one reservation page")

  const [showInitiateCheckout, setShowInitiateCheckout] = useState(true)
  const [showReservationCheckOut, setReservationCheckout] = useState(false)

  const onCheckOut = () => {
    console.log("in on CheckOut")
    setShowInitiateCheckout(false)
    setReservationCheckout(true)

  }

    //  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     setLoading(false)
    //     const reservations = await apiService.getAllReservationsForAParkingLot(parkingLotSelect._id)
    //     setReservationList(reservations)
    //     setReservationListFiltered(reservations)

    //   } catch (err) {
    //     console.log(err)
    //   }
    // }

  //     const createReservationHandler = async (reservation) => {
  //   console.log(reservation)
  //   const payload = {
  //     ...reservation,
  //   "parkingLot": parkingLotSelect._id.toString(),
  //   "owner": loggedInUser.user._id.toString()
  //   }
  //   console.log(payload)
  //   try {
  //       const reservationData = await apiService.createReservation(payload)
  //       // setReservationList((previousState)=> {
  //       //   return [reservationData, ...previousState]
  //       // })
  //       setRefresh(!refresh)


  //   } catch(err){

  //   }
  // }

//     const {reservation, updateReservation} = props

//   const [updateGuestUserPhone, setUpdateGuestUserPhone] = useState('')
//   const [isLoading, setIsLoading] = useState(true)
//   const [duration, setDuration] = useState('')
//   const [price, setPrice] = useState("")

//   useEffect(() => {
//     if (reservation) {
//       setUpdateGuestUserPhone(reservation.guestUserPhone)
//       const reservationDuration = calculateDurationInHours(reservation.createdAt, new Date())
//       setDuration(reservationDuration)
//       if (reservation.parkingLot) {
//         setPrice(calculatePrice(reservation.parkingLot.pricing, reservationDuration))
//       }


//       setIsLoading(false)
//     }


//   }, [reservation])

//   const editHandler = (e) => {
//     e.preventDefault()
//     const updatedReservation = {
//       guestUserPhone: updateGuestUserPhone
//     }
//     console.log("updatedReservation",updatedReservation)
//     updateReservation(updatedReservation)
//   }

//   const calculateDurationInHours = (start, end) => {
//     const startDate = new Date(start)
//     const endDate = new Date(end)

//     const durationInHours = Math.ceil((endDate.valueOf() - startDate.valueOf())/3600000)
//     return durationInHours
//   }

//   const calculatePrice = (pricing, durationInHours) => {
//     console.log(pricing, durationInHours)
//     let price = 0
//     if(durationInHours >= 24){
//         price = parseInt(pricing.twentyFourHourPrice) + (durationInHours - 24)*parseInt(pricing.oneHourAdditionalPrice)
//     } else if (durationInHours >= 8 ){
//         price = parseInt(pricing.eightHourPrice) + (durationInHours - 8)*parseInt(pricing.oneHourAdditionalPrice)
//     }else{
//         price = parseInt(pricing.oneHourPrice) + (durationInHours - 1)*parseInt(pricing.oneHourAdditionalPrice)
//     }
//     console.log("price > ",price)
//     return price
// }

  // const {reservation, updateReservation} = props

  // const [licensePlate, setLicensePlate] = useState("")
  // const [vehicleType, setVehicleType] = useState("")
  // const [vehicleDescription, setVehicleDescription] = useState("")
  // const [ticketCode, setTicketCode] = useState("")
  // const [checkIn, setCheckIn] = useState("")
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   if(reservation && reservation.vehicle) {
  //     setLicensePlate(reservation.vehicle.licensePlate)
  //     setVehicleType(reservation.vehicle.type)
  //     setVehicleDescription(reservation.vehicle.description)
  //   }
  //   if(reservation) {
  //     setTicketCode(reservation.ticket)
  //     setCheckIn(reservation.startTime)
  //   }

  //   setIsLoading(false)

  // }, [reservation])

  // const editHandler = (e) => {
  //   e.preventDefault()
  //   const payload = {
  //     vehicle : {
  //       licensePlate : licensePlate,
  //       type : vehicleType,
  //       description: vehicleDescription,
  //     }

  //   }
  //   updateReservation(payload)
  // }

//   import { useNavigate } from 'react-router-dom'

// const ParkingLotCreatePage = (props) => {

//   const navigate = useNavigate();

//   const onSubmitHandler = async (parkingLot) => {
//     console.log("onSubmitHandler.. in ParkingLotCreatePage ..",parkingLot )
//     try{
//       await apiService.createParkingLot(parkingLot)
//       navigate("/saas/parkinglots");
//     }catch(err){
//       console.log(err)
//     }
//   }



  return (
    <div className="text-center">

      <div className="d-flex flex-column align-items-center">


        <div>
          {showInitiateCheckout && <InitiateCheckOut onCheckOut={onCheckOut}/>}
        </div>
         <div>
          {showReservationCheckOut && <ReservationCheckOut/>}
        </div>
        {/* <div>
          <CardPaymentConfirmed/>
        </div> */}



      </div>
    </div>
  );
}

export default OneReservationPage;
