import React from 'react';

const Summary = ({ cart, setStep }) => {
  // TODO:
  // - Display summary of purchase
  // - Show payment success message
  // - Include "Back to Browse" button


  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + parseFloat(item.price), 0)
      .toFixed(2);
  };

  return (
    <div>
      <h2 className="flex p-4 justify-center text-3xl font-bold" >Order Summary</h2>
      {/* Show courses, total price */}
      <div>
        <h2 className="flex justify-center text-l  font-extrabold ">Courses Purchased</h2>
        {cart.map((item,index) => (
          <div
          key={index}
          className="flex justify-between items-center mb-2"
        >
          <div class=" bg-primary/40">
          <span className='text-sm font-bold p-2'>{item.title}</span>
          <img className="flex object-center w-50 h-25 object-cover rounded-lg p-2" src={item.image} />
          <p className="flex justify-right ">{item.description} </p>
          <span className='text-sm font-bold p-2'>${item.price}</span>

          </div>

        </div>
        ))}
        <hr className="my-4 border-primary" />
            <div className="flex justify-between items-center font-bold">
              <span>Total:</span>
              <span>${calculateTotal()}</span>
            </div>
      </div>
      
      <button className="bg-transparent hover:bg-white-900 text-white-600
           hover:text-white py-1 px-1  rounded"  onClick={() => setStep("browse")}>Back to Browse</button>
    </div>
  );
};

export default Summary;
