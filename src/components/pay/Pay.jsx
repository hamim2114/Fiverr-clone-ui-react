import './pay.scss'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from 'react';
import { axiosReq } from '../../utils/axiosReq';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51N5o6SGQ2RjwokUafGOgsMc6YjX0N3muSls8d4YbEzbrwftfmRVauZXo3xuzP9HKM5gUZQSKI04wDCrF3ibZyxll00ZBCmbJNC')

const Pay = () => {
  const {id} = useParams()
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
   const makeReq = async () => {
    try {
      const res = await axiosReq.post(`/orders/create-payment-intent/${id}`)
      setClientSecret(res.data.clientSecret)
    } catch (error) {
     console.log(error)
    }
   }
   makeReq();
  }, [])

  return (
    <div>Pay</div>
  )
}

export default Pay