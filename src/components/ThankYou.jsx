import PropTypes from "prop-types";

export default function ThankYou({ customerName }) {
  return (
    <article className="wrapper">
      <div className="thank-you-msg">
        <p>Thank you, {customerName}!</p>
        <p> Your order is on its way!</p>
      </div>
    </article>
  );
}

ThankYou.propTypes = {
  customerName: PropTypes.string.isRequired,
};
