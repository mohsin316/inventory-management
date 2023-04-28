// react dom
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

// REACT
import { useState } from "react";

// styles
import "./Product.css";

// images
import Chair from "../assets/chair.jpg";
import Cube from "../assets/cube.jpg";
import Fruit from "../assets/fruit.jpg";
import Phone from "../assets/phone.jpg";
import Radio from "../assets/radio.jpg";
import Table from "../assets/table.jpg";

export async function productLoader({ params }) {
  const id = params.id;
  return { id };
}

export default function Product() {
  const { id } = useLoaderData();
  const [sell, setSell] = useState("");

  const selectCat = (id) => {
    if (Number(id) % 2 === 0) {
      return "cat1";
    } else {
      return "cart2";
    }
  };

  const sellItem = () => {
    console.log(sell, "delete this");
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
        return Phone;
    }
  };
  const image = selectPic(Number(id));

  return (
    <section className="container product-container ">
      <div className="image-container">
        <img src={image} alt="product image" />
      </div>
      <div className="information flow" style={{ "--flow-spacer": "4rem" }}>
        <h2>Title of product</h2>
        <strong className="category">{selectCat(id)}</strong>
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
            <span>Price:</span> $200
          </small>
          <small>
            <span>Qty:</span> 15
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
          <Link to={`/purchase/${id}`}>Order More</Link>
        </div>
      </div>
    </section>
  );
}
