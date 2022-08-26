import React , {useState}from 'react'
import './Payment.css';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link} from "react-router-dom";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {useState} from 'react';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer'
function Payment() {
         
       const stripe=useStripe();
       const elements=useElements();

       const [error,setError]=useState(null);
       const [disabled,setDisabled]=useState(null);
       const [succeeded,setSucceeded]=useState(false);
       const [processing,setProcessing] =useState("");
       const [clientSecret ,setClientSecret] = useState(true);

       const handleSubmit = async (event) =>{
             //fancy stripe part ...
             event.preventDefault();
             setProcessing(true);

             const payload = await stripe
       }

       const handleChange = event =>{
                  //listen fro the changes in the Card element
                  //check if there are any errors in the details.
                setDisabled(event.empty);
                setError(event.error? event.error.message :"" );

       }


    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment__container'>
                    <h1>
                        Checkout (
                            <Link to ='/checkout'>{basket?.length} items</Link>
                        )
                    </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                       <p>{user?.email}</p>
                       <p>Flat No:405, Thunder Street</p>
                       <p>Los Angeles,CA</p>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review , Items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                       {basket.map(item => (
                           <CheckoutProduct
                              id={item.id}
                              title={item.title}
                              image={item.image}
                              price={item.price}
                              rating={item.rating}
                           />
                       ))}
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/*  stripe magic will go*/}

                         <form onSubmit={handleSubmit}>
                             <CardElement onChange={handleChange} />
                             <div className="payment__priceContainer">
                               <CurrencyFormat
                                  renderText={(value) => (
                                    <>
                                    <h3>Order Total : {value}</h3> 
                                    </>
                                  )}
                                  decimalScale={2}
                                  value={getBasketTotal(basket)}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing? <p>Processing..</p>: "Buy Now"}</span>
                                </button>
                             </div>
                             {error && <div>{error}</div>}
                         </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
