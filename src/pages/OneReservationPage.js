import React, {useState, useEffect} from "react";
import { Link , useParams} from "react-router-dom";
import InitiateCheckOut from "../components/InitiateCheckOut";
import ReservationCheckOut from "../components/ReservationCheckOut";
import CardPaymentConfirmed from "../components/CardPaymentConfirmed"
import apiService from "../services/api.service";

function OneReservationPage() {
  
  const {phoneNumber} = useParams()
  
  const [showInitiateCheckout, setShowInitiateCheckout] = useState(true)
  const [showReservationCheckOut, setReservationCheckout] = useState(false)
  const [showPayByCard, setShowPayByCard] = useState(false)


  const [isLoading, setIsLoading] = useState(true)
  const [refresh, setRefresh] = useState(false)
  const [guestReservation, setGuestReservation] = useState('')

  useEffect(()=> {
    async function fetchData() {
      try {
        const reservation = await apiService.getAReservation(phoneNumber)
        console.log(reservation)
        const reservationStartTimeStamp = new Date(reservation.createdAt)
        reservation.startDate = `${reservationStartTimeStamp.getDay()}/${reservationStartTimeStamp.getMonth()}/${reservationStartTimeStamp.getFullYear()}`
        reservation.startTime = `${reservationStartTimeStamp.getHours()}:${reservationStartTimeStamp.getMinutes()}`
        setGuestReservation(reservation)
        setIsLoading(false)
        if(reservation.endedAt){
          const reservationEndTimeStamp = new Date(reservation.endedAt)
          reservation.endDate = `${reservationEndTimeStamp.getDay()}/${reservationEndTimeStamp.getMonth()}/${reservationEndTimeStamp.getFullYear()}`
          reservation.endTime = `${reservationEndTimeStamp.getHours()}:${reservationEndTimeStamp.getMinutes()}`
          const duration = calculateDurationInHours(reservation.createdAt, reservation.endedAt)
          reservation.duration = duration
          reservation.price = calculatePrice(reservation.parkingLot.pricing, duration)
          setShowInitiateCheckout(false)
          setReservationCheckout(true)
        }
        if(reservation.payBy === "CARD"){
          setShowInitiateCheckout(false)
          setReservationCheckout(false)
          setShowPayByCard(true)
        }
      } catch(err) {

      }
    }
    fetchData()

  },[refresh])

  const checkOutReservation = async () => {
    try{
      const updatedReservation = await apiService.updateReservation(phoneNumber, {endedAt: new Date()})
      console.log(updatedReservation)
      setRefresh(!refresh)
      setShowInitiateCheckout(false)
      setReservationCheckout(true)
    }catch(err){
      console.log(err)
    }
  }

  const updatePaymentMethod  = async (option) => {
    if(option === "CARD"){
      console.log("i want to pay by CARD")
      try{
        const updatedReservation = await apiService.updateReservation(phoneNumber, {payBy: "CARD"})
        console.log(updatedReservation)
        setRefresh(!refresh)
        setShowInitiateCheckout(false)
        setReservationCheckout(false)
        setShowPayByCard(true)
      }catch(err){
        console.log(err)
      }
    }else if (option === "CASH"){
      console.log("i want to pay by CASH")
    }
  }

  const calculateDurationInHours = (start, end) => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    const durationInHours = Math.ceil((endDate.valueOf() - startDate.valueOf())/3600000)
    return durationInHours
  }
  
  const calculatePrice = (pricing, durationInHours) => {
    let price = 0
    if(durationInHours >= 24){
        price = parseInt(pricing.twentyFourHourPrice) + (durationInHours - 24)*parseInt(pricing.oneHourAdditionalPrice)
    } else if (durationInHours >= 8 ){
        price = parseInt(pricing.eightHourPrice) + (durationInHours - 8)*parseInt(pricing.oneHourAdditionalPrice)
    }else{
        price = parseInt(pricing.oneHourPrice) + (durationInHours - 1)*parseInt(pricing.oneHourAdditionalPrice)
    }
    return price
  }

if (isLoading) {
  return (
    <p>loading ...</p>
  )
}


  return (
    <div className="text-center">

      <div className="d-flex flex-column align-items-center">


        <div>
          {showInitiateCheckout && <InitiateCheckOut onCheckOut={checkOutReservation} guestReservation={guestReservation}/>}
        </div>
         <div>
          {showReservationCheckOut && <ReservationCheckOut guestReservation={guestReservation} updatePaymentMethod={updatePaymentMethod}/>}
        </div>
        <div>
          {showPayByCard && <p>Pay by card now!!</p>}
        </div>
        {/* <div>
          <CardPaymentConfirmed/>
        </div> */}
      </div>
    </div>
  );
}

export default OneReservationPage;
