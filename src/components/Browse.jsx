import React from 'react';
import { Courses } from '../data/Courses';

const Browse = ({ cart, setCart, setStep }) => {
  // TODO:
  // - Display list of courses (use props or mock data)
  // - Add search input fields (extra credit)
  // - Add "Add to Cart" button for each course

  const listItems = Courses.map((item) => (
    <div class= "container mx-auto px-4">
        <div key={item.offering_id}>
          <img className="img-fluid" src={item.image} /> <br/>
          <h1 className="flex text-xl "> {item.title}</h1>
          {item.category} <br/>
          {item.price} <br/>
          <button type="button" variant="dark" onClick={() => removeFromCart(item)} > Remove </button>{" "}
          <button type="button" variant="dark" onClick={() => addToCart(item)}> Add </button>

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
      <h2 className=' font-bold'>Browse Courses</h2> 
      <div className='grid grid-cols-4'>
        {listItems }
      </div>
      {/* Search input (Extr Credit)*/} 
      <button onClick={() => setStep('cart')}>Go to Cart</button>
    </div>
  );
};

export default Browse;
