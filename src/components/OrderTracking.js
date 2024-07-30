import React, { useState } from 'react';

const OrderTracking = () => {
  const [trackingId, setTrackingId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleTrackOrder = () => {
    // This function will be implemented to track order status from the backend
    const dummyStatus = 'In Transit'; // Dummy data for demonstration
    setOrderStatus(dummyStatus);
  };

  return (
    <div>
      <h2>Order Tracking</h2>
      <input
        type="text"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        placeholder="Enter Tracking ID"
      />
      <button onClick={handleTrackOrder}>Track Order</button>
      {orderStatus && <p>Status: {orderStatus}</p>}
    </div>
  );
};

export default OrderTracking;
