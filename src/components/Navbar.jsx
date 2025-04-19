import React, { useState } from 'react';

const Navbar = ({ setStep, cart, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav className="bg-secondary p-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center gap-8">
        <h1 className="text-2xl font-bold whitespace-nowrap">Course Catalog</h1>

        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search courses by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-8 py-2 rounded-lg bg-primary/20 border border-primary/20 focus:outline-none focus:border-primary/40 text-text placeholder-text/40"
          />
        </div>

        <button
          onClick={() => setStep('cart')}
          className="px-6 py-2 bg-success text-text rounded-lg hover:bg-success/80 transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          Cart ({cart.length})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
