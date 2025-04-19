import React, { useState } from 'react';
import BrowseCourses from './components/Browse';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Summary from './components/Summary';
import Footer from './components/Footer';

const App = () => {
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState('browse');
  const [userInfo, setUserInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    name: '',
    email: '',
  });

  return (
    <div className="min-h-screen flex flex-col">
      <div className="app-container flex-grow">
        {step === 'browse' && (
          <BrowseCourses cart={cart} setCart={setCart} setStep={setStep} />
        )}
        {step === 'cart' && (
          <Cart cart={cart} setCart={setCart} setStep={setStep} />
        )}
        {step === 'payment' && (
          <Payment
            cart={cart}
            setCart={setCart}
            setStep={setStep}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        )}
        {step === 'summary' && (
          <Summary
            cart={cart}
            setCart={setCart}
            setStep={setStep}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
