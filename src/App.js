import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import OrderManagement from './components/OrderManagement';
import OrderTracking from './components/OrderTracking';
// Uncomment or add these imports if you have these components
// import CustomerList from './components/CustomerList';
// import AddCustomer from './components/AddCustomer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage-orders" element={<OrderManagement />} />
          <Route path="/track-order" element={<OrderTracking />} />
          {/* Add routes for the missing components if they exist */}
          {/* <Route path="/customers" element={<CustomerList />} />
          <Route path="/add-customer" element={<AddCustomer />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
