import React from 'react';

const Cart = ({ cart, setCart, setStep }) => {
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + parseFloat(item.price), 0)
      .toFixed(2);
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto bg-secondary rounded-lg p-6 mt-20">
        <h2 className="text-center text-3xl font-bold p-2">Your Cart</h2>
        <hr className="m-4" />
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl">Your cart is empty</p>
            <button
              onClick={() => setStep('browse')}
              className="mt-4 px-6 py-2 bg-primary rounded-lg hover:bg-primary/80 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div>
              {cart.map((item, index) => (
                <div key={`${item.offering_id}-${index}`}>
                  <div className="flex items-center bg-primary/20 gap-6 p-4 rounded-lg mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-text/60">{item.instructor}</p>
                      <p className="text-sm text-text/60">
                        Course ID: {item.id}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">${item.price}</p>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="mt-2 text-warning hover:text-warning/80"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-secondary rounded-lg ">
              <div className="flex justify-end mb-4 gap-2">
                <span className="text-2xl mb-4">Total:</span>
                <span className="text-2xl font-bold">${calculateTotal()}</span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setStep('browse')}
                  className="flex-1 px-6 py-3 bg-primary text-text rounded-lg hover:bg-primary/80 transition-colors"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={() => setStep('payment')}
                  className="flex-1 px-6 py-3 border bg-success border-primary text-text rounded-lg hover:bg-success/80 transition-colors"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
