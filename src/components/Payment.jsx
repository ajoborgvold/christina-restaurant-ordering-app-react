import { useState } from "react";
import PropTypes from "prop-types";

export default function Payment({ onPaymentSubmit, onClose }) {
  const [paymentData, setPaymentData] = useState({
    customerName: "",
    cardNumber: "",
    cvv: "",
  });

  const handleChange = (field, value) => {
    setPaymentData({
      ...paymentData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any validation or additional logic here if needed

    // Call the onPaymentSubmit prop to notify the parent component
    onPaymentSubmit(paymentData);

    // Close the modal after submission
    onClose();
  };

  return (
    <section id="payment-modal" className="payment-modal hidden">
      <div className="btn-container">
        <button
          className="close-btn"
          id="close-btn"
          onClick={onClose}
          aria-label="Close the payment modal"
        >
          X
        </button>
      </div>
      <div className="inner-payment-modal">
        <h3>Enter card details</h3>
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="customer-name"
            name="customer-name"
            placeholder="Enter your name"
            aria-label="customer-name"
            value={paymentData.customerName}
            onChange={(e) => handleChange("customerName", e.target.value)}
            required
          />
          <input
            type="number"
            id="card-number"
            name="card-number"
            placeholder="Enter card number"
            aria-label="card-number"
            value={paymentData.cardNumber}
            onChange={(e) => handleChange("cardNumber", e.target.value)}
            required
          />
          <input
            type="number"
            id="cvv"
            name="cvv"
            placeholder="Enter CVV"
            aria-label="cvv"
            value={paymentData.cvv}
            onChange={(e) => handleChange("cvv", e.target.value)}
            required
          />
          <button type="submit" className="pay-btn" aria-label="Submit payment">
            Pay
          </button>
        </form>
      </div>
    </section>
  );
}

Payment.propTypes = {
  onPaymentSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
