import React, { useState } from 'react';
import { Courses } from '../data/Courses';
import Navbar from './Navbar';

const Browse = ({ cart, setCart, setStep }) => {
  const [filteredCourses, setFilteredCourses] = useState(Courses);

  // TODO:
  // - Display list of courses (use props or mock data)
  // - Add search input fields (extra credit)
  // - Add "Add to Cart" button for each course

  const removeFromCart = (item) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
    setCart(hardCopy);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredCourses(Courses);
      return;
    }

    const term = searchTerm.toLowerCase();
    const filtered = Courses.filter((course) =>
      course.title.toLowerCase().includes(term)
    );
    setFilteredCourses(filtered);
  };

  return (
    <div>
      <Navbar setStep={setStep} cart={cart} onSearch={handleSearch} />
      <main className="p-8 pt-24">
        <div className="max-w-7xl mx-auto bg-secondary rounded-lg p-6">
          <h2 className="text-center text-3xl font-bold p-2">Browse Courses</h2>
          <hr className="m-4" />

          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-text/60">
                No courses found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((item) => (
                <div
                  key={item.offering_id}
                  className="bg-primary/20 rounded-lg overflow-hidden"
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-text/60 mb-2">
                      Instructor: {item.instructor}
                    </p>
                    <p className="text-sm text-text/60 mb-2">
                      Rating: {item.rating}
                    </p>
                    <p className="text-sm text-text/60 mb-4">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">${item.price}</span>
                      <div className="space-x-2">
                        <button
                          onClick={() => removeFromCart(item)}
                          className="px-4 py-2 bg-warning/80 text-text rounded hover:bg-warning transition-colors"
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => addToCart(item)}
                          className="px-4 py-2 bg-success text-text rounded hover:bg-success/80 transition-colors"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Browse;
