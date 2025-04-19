import React from 'react';

const Summary = ({ cart, setCart, setStep, userInfo, setUserInfo }) => {
  const TAX_RATE = 0.07;

  const calculateSubtotal = () => {
    return cart
      .reduce((total, item) => total + parseFloat(item.price), 0)
      .toFixed(2);
  };

  const calculateTax = () => {
    const subtotal = parseFloat(calculateSubtotal());
    return (subtotal * TAX_RATE).toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const tax = parseFloat(calculateTax());
    return (subtotal + tax).toFixed(2);
  };

  const clearCart = () => {
    setCart([]);
  };

  const transactionId =
    'TXN-' + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto bg-secondary rounded-lg p-6 mt-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold p-2">Order Summary</h2>
          <hr className="m-4" />
          <div className="bg-success/20 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-success">
              Payment Successful!
            </h3>
            <p className="text-sm mt-2">Transaction ID: {transactionId}</p>
          </div>
        </div>

        <div className="mb-8 p-4 bg-primary/20 rounded-lg">
          <h3 className="text-center text-xl font-bold mb-2">
            User Information
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-text/60">Name</p>
              <p className="font-semibold">{userInfo.name}</p>
            </div>
            <div>
              <p className="text-sm text-text/60">Email</p>
              <p className="font-semibold">{userInfo.email}</p>
            </div>
          </div>

          <h3 className="text-center text-xl font-bold">Order Details</h3>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-4 rounded-lg mb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-text/60">{item.description}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">${item.price}</p>
              </div>
            </div>
          ))}

          <hr className="my-4 border-primary" />
          <div className="flex flex-col items-end gap-2">
            <div className="flex justify-end gap-8">
              <span className="text-lg text-text/60">Subtotal:</span>
              <span className="text-lg">${calculateSubtotal()}</span>
            </div>
            <div className="flex justify-end gap-8">
              <span className="text-lg text-text/60">Tax (7%):</span>
              <span className="text-lg">${calculateTax()}</span>
            </div>
            <div className="flex justify-end gap-8 pt-2 border-t border-primary">
              <span className="text-2xl">Total:</span>
              <span className="text-2xl font-bold">${calculateTotal()}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => {
              setStep('browse');
              clearCart();
              setUserInfo({
                name: '',
                email: '',
                cardNumber: '',
                expiryDate: '',
                cvc: '',
              });
            }}
            className="flex-1 px-6 py-3 bg-primary text-text rounded-lg hover:bg-primary/80 transition-colors"
          >
            Back to Browse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
