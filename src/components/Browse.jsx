import React from 'react';
import {Courses} from '../data/Courses'

const Browse = ({ cart, setCart, setStep }) => {
  // TODO:
  // - Display list of courses (use props or mock data)
  // - Add search input fields (extra credit)
  // - Add "Add to Cart" button for each course

  const listItems = Courses.map((item) => (
        <div key={item.offering_id}>
          <img className="img-fluid" src={item.image} width={350}/> <br/>
          <h1 className="flex justify-center item-center text-xl "> {item.title}</h1>
          {item.category} <br/>
          {item.price} <br/>
        </div>
      ));

  return (
    <div>
      {/* Add appropriate Tailwind styling 👇 */}
      <h2 className='flex-wrap justify-center font-bold'>Browse Courses</h2> 
      <div className='grid grid-cols-3 gap-{4px}'>
        {listItems }
      </div>
      {/* Search input (Extra Credit)*/} 
      {/* Course list with Add to Cart button */}
      <button onClick={() => setStep("cart")}>Go to Cart</button>
    </div>
  );
};

export default Browse;
