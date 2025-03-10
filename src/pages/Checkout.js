import React, { useState } from "react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handlePayment = () => {
    // Xử lý thanh toán
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <label>Payment Method:</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Checkout;
