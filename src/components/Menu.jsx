import PropTypes from "prop-types";

export default function Menu({ addToOrder, menuItemArray }) {
  return (
    <div className="wrapper">
      <section className="menu-section">
        {menuItemArray.map((item) => (
          <div key={item.id} className="item-section">
            <span className="emoji">{item.emoji}</span>
            <div className="description-section">
              <h3>{item.name}</h3>
              <p className="ingredients">{item.ingredients.join(", ")}</p>
              <p className="cost">${item.price}</p>
            </div>
            <button className="add-btn" onClick={() => addToOrder(item)}>
              +
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

Menu.propTypes = {
  addToOrder: PropTypes.func.isRequired,
  menuItemArray: PropTypes.array.isRequired,
};
