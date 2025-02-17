import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/manage-orders">Order Management</Link></li>
          <li><Link to="/track-order">Order Tracking</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
