// styles
import "./Item.css";

// react
import { Link } from "react-router-dom";

// prop types
import PropTypes from "prop-types";

Item.propTypes = {
  product: PropTypes.object,
};
// images
import Chair from "../assets/chair.jpg";
import Cube from "../assets/cube.jpg";
import Fruit from "../assets/fruit.jpg";
import Phone from "../assets/phone.jpg";
import Radio from "../assets/radio.jpg";
import Table from "../assets/table.jpg";

export default function Item({ product }) {
  const selectPic = (pid) => {
    switch (pid) {
      case 100:
        return Chair;
      case 101:
        return Table;
      case 102:
        return Radio;
      case 103:
        return Phone;
      case 104:
        return Cube;
      case 105:
        return Fruit;
      default:
        return Chair;
    }
  };

  const image = selectPic(product.pid);
  return (
    <Link
      to={`product/${product.name}`}
      state={{ ...product }}
      className="product-item"
    >
      <div className="item-image-container">
        <img src={image} alt="item" height={250} />
      </div>
      <div className="details">
        <div className="name-category">
          <strong className="category">{product.category}</strong>
          <h2>{product.name}</h2>
        </div>
        <div className="price-qty">
          <small>Price: {product.cost}</small>
          <small>Qty: {product.stock}</small>
        </div>
      </div>
    </Link>
  );
}
