import React from "react";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import Order from "./components/Order.jsx";
import Payment from "./components/Payment.jsx";
import ThankYou from "./components/ThankYou.jsx";
import { menuItemArray } from "./data";

export default function App() {
  // For the Order Component
  const [orderItems, setOrderItems] = React.useState([]);
  const [showPaymentModal, setShowPaymentModal] = React.useState(false);
  const [isPaymentCompleted, setIsPaymentCompleted] = React.useState(false);
  const [customerName, setCustomerName] = React.useState("");

  const addToOrder = (item) => {
    setOrderItems([...orderItems, item]);
  };

  const handleCompleteOrder = () => {
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = (paymentData) => {
    // Handle payment submission logic here
    setIsPaymentCompleted(true);
    setCustomerName(paymentData.customerName);
    setShowPaymentModal(false);
  };

  return (
    <>
      <Header />
      <Menu menuItemArray={menuItemArray} addToOrder={addToOrder} />
      {isPaymentCompleted ? (
        <ThankYou customerName={customerName} />
      ) : (
        <Order orderItems={orderItems} onCompleteOrder={handleCompleteOrder} />
      )}
      {showPaymentModal && (
        <Payment
          onClose={() => setShowPaymentModal(false)}
          onPaymentSubmit={handlePaymentSubmit}
        />
      )}
    </>
  );
}
