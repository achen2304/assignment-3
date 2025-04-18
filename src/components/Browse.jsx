import React from 'react';
import { Courses } from '../data/Courses';

const Browse = ({ cart, setCart, setStep }) => {
  // TODO:
  // - Display list of courses (use props or mock data)
  // - Add search input fields (extra credit)
  // - Add "Add to Cart" button for each course

  const listItems = Courses.map((item) => (
    <div class= "flex items-center bg-primary/40 gap-7 p-4 rounded-lg mb-2 px-5 ">
        <div key={item.offering_id}>
          <img className="flex object-center w-90 h-50 object-cover rounded-lg" src={item.image} /> <br/>
          <h1 className="flex justify-center text-l  font-extrabold "> {item.title}</h1>
          <h2 className="flex justify-right "> Instructor: {item.instructor} </h2>
          <p className="flex justify-right "> Price: {item.price} </p>
          <p className="flex justify-right "> Rating: {item.rating} </p>
          <p className="flex justify-right ">{item.description} </p>
          <p className="flex justify-right "> ID: {item.id} </p>


          <button type="button" variant="light" 
          className="bg-transparent hover:bg-white-900 text-white-600
           hover:text-white py-1 px-1  rounded" 
           onClick={() => removeFromCart(item)} > Remove </button>{" "}
          
          <button type="button" variant="light" 
          className="bg-transparent hover:bg-white-900 text-white-600
           hover:text-white py-1 px-1  rounded" onClick={() => addToCart(item)}> Add </button>
          
          
          </div>
        </div>
      ));

      const removeFromCart = (item) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
        setCart(hardCopy);
    };

    const addToCart = (item) => {
      setCart([...cart, item]);
  };



  return (
    <div>
      {/* Add appropriate Tailwind styling 👇 */}
      <h2 className=' text-center text-3xl font-bold p-2'>Browse Courses</h2> 
      <div className='grid grid-cols-4'>
        {listItems }
      </div>
      {/* Search input (Extr Credit)*/} 
      <button onClick={() => setStep('cart')}>Go to Cart</button>
    </div>
  );
};

export default Browse;
