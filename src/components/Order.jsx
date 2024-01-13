import PropTypes from "prop-types";

export default function Order({ orderItems, onCompleteOrder }) {
  // Check if there are any order items
  const hasOrderItems = orderItems.length > 0;

  // Calculate total price
  const total = orderItems.reduce((total, item) => {
    const quantity = item.quantity || 1;
    return total + item.price * quantity;
  }, 0);

  return (
    <div className="wrapper">
      {hasOrderItems && (
        <section className="order-section">
          <div className="ordered-items">
            <h4 className="order-title">Your order</h4>
            {orderItems.map((item) => (
              <div key={item.id} className="all-items">
                <p className="order-name">{item.name}</p>
                <p className="order-price">${item.price}</p>
              </div>
            ))}
          </div>
          <div className="border"></div>
          <div className="total-container">
            <p className="total-price">Total price:</p>
            <p className="total-price">${total}</p>
          </div>
          <button
            className="complete-order-btn"
            onClick={onCompleteOrder}
            aria-label="Complete order"
          >
            Complete order
          </button>
        </section>
      )}
    </div>
  );
}

Order.propTypes = {
  orderItems: PropTypes.array.isRequired,
  onCompleteOrder: PropTypes.func.isRequired,
};
