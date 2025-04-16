import React, { useState } from 'react';
import BrowseCourses from './components/Browse';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Summary from './components/Summary';
import Footer from './components/footer';

const testcart = [
  {
    offering_id: 1,
    title: 'Cloud Computing',
    instructor: 'Jaime Cremin',
    price: '24.56',
    image:
      'https://media.istockphoto.com/id/1669453534/photo/3d-render-cloud-computing-circuit-board-background.jpg?s=612x612&w=0&k=20&c=hpJ-qm6jT-Ip-1grdsbw6Xkr_fWz36UV_JnMB68geJc=',
    rating: 4.2,
    id: 'COMS459',
    description:
      'Explore the fundamentals of cloud infrastructure, services, and deployment models, including AWS, Azure, and Google Cloud.',
  },
  {
    offering_id: 2,
    title: 'Cloud Computing',
    instructor: 'Jaime Cremin',
    price: '24.56',
    image:
      'https://media.istockphoto.com/id/1669453534/photo/3d-render-cloud-computing-circuit-board-background.jpg?s=612x612&w=0&k=20&c=hpJ-qm6jT-Ip-1grdsbw6Xkr_fWz36UV_JnMB68geJc=',
    rating: 4.2,
    id: 'COMS459',
    description:
      'Explore the fundamentals of cloud infrastructure, services, and deployment models, including AWS, Azure, and Google Cloud.',
  },
];

const App = () => {
  const [cart, setCart] = useState(testcart);
  const [step, setStep] = useState('browse');

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
          <Payment cart={cart} setCart={setCart} setStep={setStep} />
        )}
        {step === 'summary' && <Summary cart={cart} setStep={setStep} />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
