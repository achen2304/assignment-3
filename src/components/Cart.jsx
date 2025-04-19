import React from 'react';

const Cart = ({ cart, setCart, setStep }) => {
  const TAX_RATE = 0.07;

  const removeFromCart = (item) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
    setCart(hardCopy);
  };

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
                        onClick={() => removeFromCart(item)}
                        className="mt-2 text-warning hover:text-warning/80"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-secondary rounded-lg">
              <div className="flex flex-col items-end gap-2 mb-2">
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
                  <span className="text-2xl font-bold">
                    ${calculateTotal()}
                  </span>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
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
