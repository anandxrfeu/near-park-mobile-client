import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import GenerateTicket from "../components/GenerateTicket";
import apiService from "../services/api.service"


function ParkingLotPage() {
   const {id} = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [pricing, setPricing] = useState('')

  useEffect(() => {
    async function fetchData() {
     try {
      const parkingLotPricing = await apiService.getParkingLotById(id)
      console.log("parking", parkingLotPricing)
      setPricing(parkingLotPricing)
      setIsLoading(false)
     } catch(err) {
      console.log(err)
     }

    }
     fetchData()

  }, [id])

  if (isLoading) {
    return (
      <p>loading ...</p>
    )
  }

  return (
    <div className="text-center">
      <div className="d-flex flex-column align-items-center">
        <div>
          <GenerateTicket pricing={pricing}/>
        </div>
        {/* <div>
          <TicketAndPhoneFind/>
        </div> */}


      </div>
    </div>
  );
}

export default ParkingLotPage;
