// styles
import "./Item.css";

// react
import { Link } from "react-router-dom";

// prop types
import PropTypes from "prop-types";

Item.propTypes = {
  pic: PropTypes.number,
};
// images
import Chair from "../assets/chair.jpg";
import Cube from "../assets/cube.jpg";
import Fruit from "../assets/fruit.jpg";
import Phone from "../assets/phone.jpg";
import Radio from "../assets/radio.jpg";
import Table from "../assets/table.jpg";

export default function Item({ pic }) {
  const selectCat = (pic) => {
    if (pic % 2 === 0) {
      return "cat1";
    } else {
      return "cart2";
    }
  };

  const selectPic = (pic) => {
    switch (pic) {
      case 0:
        return Chair;
      case 1:
        return Cube;
      case 2:
        return Fruit;
      case 3:
        return Table;
      case 4:
        return Radio;
      case 5:
        return Phone;
      default:
        return Chair;
    }
  };

  const image = selectPic(pic);
  return (
    <Link to={`product/${pic}`} query={"testing"} className="product-item">
      <div className="item-image-container">
        <img src={image} alt="item" height={250} />
      </div>
      <div className="details">
        <div className="name-category">
          <strong className="category">{selectCat(pic)}</strong>
          <h2>Item Name{pic}</h2>
        </div>
        <div className="price-qty">
          <small>Price: $200</small>
          <small>Qty: 15</small>
        </div>
      </div>
    </Link>
  );
}
