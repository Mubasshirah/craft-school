import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from '../../paymentRelated/CheckoutForm';


import useSelectedClass from '../../hooks/useSelectedClass';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key);

const Payment = () => {
    const [selected]=useSelectedClass();
    const total=selected.map(select=>select.price);
    const price=parseFloat(total);
    return (
        
          <div className='w-[50%] mx-auto'>
           
              <Elements stripe={stripePromise}>
                <CheckoutForm price={price} selected={selected}></CheckoutForm>
            </Elements>
        
          </div>
    );
};

export default Payment;