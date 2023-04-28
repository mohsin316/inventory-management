// react dom
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// REACT
import { useState } from "react";

// styles
import "./Product.css";

// // prop types
// import PropTypes from "prop-types";

// Item.propTypes = {
//   product: PropTypes.object,
// };

// images
import Chair from "../assets/chair.jpg";
import Cube from "../assets/cube.jpg";
import Fruit from "../assets/fruit.jpg";
import Phone from "../assets/phone.jpg";
import Radio from "../assets/radio.jpg";
import Table from "../assets/table.jpg";

export default function Product() {
  const { state: product } = useLocation();
  const [sell, setSell] = useState("");

  const sellItem = () => {
    console.log(sell, "delete this");
  };
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
    <section className="container product-container ">
      <div className="image-container">
        <img src={image} alt="product image" />
      </div>
      <div className="information flow" style={{ "--flow-spacer": "4rem" }}>
        <h2>{product.name}</h2>
        <strong className="category">{product.category}</strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          velit sunt eligendi? Exercitationem, explicabo neque ut dolores at
          esse laboriosam nemo aut quasi consectetur veritatis soluta autem sed
          error qui? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium consequatur doloribus neque aperiam, nostrum nisi. Dolorem
          reprehenderit nulla facere, excepturi vitae perspiciatis
          exercitationem unde tenetur neque dicta voluptate sapiente iusto?
        </p>
        <div className="price-qty-info">
          <small>
            <span>Price:</span> {product.cost}
          </small>
          <small>
            <span>Qty:</span> {product.stock}
          </small>
        </div>

        <div className="options">
          <label>
            <input
              value={sell}
              onChange={(e) => setSell(e.target.value)}
              type="number"
              min="1"
            />
            <button onClick={sellItem}>Sell:</button>
          </label>
          <Link to={`/purchase/${product.name}`}>Order More</Link>
        </div>
      </div>
    </section>
  );
}
