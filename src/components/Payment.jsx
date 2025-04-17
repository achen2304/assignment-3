import React, { useState } from 'react';
import Footer from './footer';

const Payment = ({ cart, setCart, setStep }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    name: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!paymentInfo.cardNumber.replace(/\s/g, '').match(/^\d{16}$/)) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }

    if (!paymentInfo.expiryDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
      newErrors.expiryDate = 'Please enter a valid expiry date (MM/YY)';
    }

    if (!paymentInfo.cvc.match(/^\d{3}$/)) {
      newErrors.cvc = 'Please enter a valid CVC';
    }

    if (!paymentInfo.name.trim()) {
      newErrors.name = 'Please enter cardholder name';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setStep('summary');
    }
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + parseFloat(item.price), 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="p-8">
        <div className="max-w-4xl mx-auto bg-secondary rounded-lg p-6 mt-20">
          <h2 className="text-center text-3xl font-bold p-2">
            Payment Details
          </h2>
          <hr className="m-4" />
          <div className="mb-8 p-4 bg-primary/20 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <span>{item.title}</span>
                <span>${item.price}</span>
              </div>
            ))}
            <hr className="my-4 border-primary" />
            <div className="flex justify-between items-center font-bold">
              <span>Total:</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2">Name on Card</label>
              <input
                type="text"
                name="name"
                value={paymentInfo.name}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-primary/20 border ${
                  errors.name ? 'border-warning' : 'border-primary'
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-warning mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block mb-2">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-primary/20 border ${
                  errors.cardNumber ? 'border-warning' : 'border-primary'
                }`}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
              />
              {errors.cardNumber && (
                <p className="text-warning mt-1">{errors.cardNumber}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={paymentInfo.expiryDate}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-primary/20 border ${
                    errors.expiryDate ? 'border-warning' : 'border-primary'
                  }`}
                  placeholder="MM/YY"
                  maxLength="5"
                />
                {errors.expiryDate && (
                  <p className="text-warning mt-1">{errors.expiryDate}</p>
                )}
              </div>

              <div>
                <label className="block mb-2">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  value={paymentInfo.cvc}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-primary/20 border ${
                    errors.cvc ? 'border-warning' : 'border-primary'
                  }`}
                  placeholder="123"
                  maxLength="4"
                />
                {errors.cvc && (
                  <p className="text-warning mt-1">{errors.cvc}</p>
                )}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                type="button"
                onClick={() => setStep('cart')}
                className="text-text flex-1 px-6 py-3 bg-primary text-primary rounded-lg hover:bg-primary/80 transition-colors"
              >
                Back to Cart
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-success text-text rounded-lg hover:bg-success/80 transition-colors"
              >
                Submit Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Payment;
