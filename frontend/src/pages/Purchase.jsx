// react dom
import { useLoaderData } from "react-router-dom";

// styles
import "./Purchase.css";
// REACT
import { useState } from "react";
export async function companyLoader({ params }) {
  const id = params.id;
  return { id };
}

export default function Purchase() {
  const { id } = useLoaderData();
  const [sell, setSell] = useState("");
  const [companyName, setCompanyName] = useState("Furniture");
  const sellItem = () => {
    console.log(sell, "add this this");
  };
  return (
    <section className="container company-container">
      <div className="company-details flow" style={{ "--flow-spacer": "4rem" }}>
        <h1>{companyName} Company Name</h1>
        <p>item no {id}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          mollitia itaque alias numquam. Laudantium quaerat consectetur
          praesentium, laborum alias distinctio fugit voluptas quam iure magni,
          excepturi dicta adipisci neque ducimus! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Adipisci ab officiis, aliquam labore hic
          quas quae quo incidunt cupiditate totam voluptatibus, praesentium
          quaerat ea in tempore vel qui impedit quibusdam?
        </p>
        <div className="company-options">
          <label>
            <input
              value={sell}
              onChange={(e) => setSell(e.target.value)}
              type="number"
              min="1"
            />
            <button onClick={sellItem}>Buy</button>
          </label>
        </div>
      </div>
      <div className="company">
        <div
          onClick={() => setCompanyName("Furniture")}
          className="company-image"
        >
          Furniture
        </div>
        <div
          onClick={() => setCompanyName("Electronics")}
          className="company-image"
        >
          Electronics
        </div>
        <div onClick={() => setCompanyName("Books")} className="company-image">
          Books
        </div>
        <div
          onClick={() => setCompanyName("Clothes")}
          className="company-image"
        >
          Clothes
        </div>
        <div onClick={() => setCompanyName("Sports")} className="company-image">
          Sports
        </div>
        <div onClick={() => setCompanyName("Travel")} className="company-image">
          Travel
        </div>
      </div>
    </section>
  );
}
