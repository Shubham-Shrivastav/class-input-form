import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Form Page</Link>
      <Link to="/form-data">Detail Page</Link>
    </nav>
  );
}

export default Navbar;