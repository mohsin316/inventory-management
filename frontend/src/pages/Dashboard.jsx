// react-router-dom
import { useLoaderData } from "react-router-dom";

// components
import Item from "../components/Item";

// styles
import "./Dashboard.css";

export async function dashboardLoader() {
  const response = await fetch("http://localhost:3000/productInfo/");
  const json = await response.json();

  if (!response.ok) {
    console.log("YIKES", response);
  }
  return { json };
}

export default function Dashboard() {
  const { json: products } = useLoaderData();
  console.log(products[0].pid);
  return (
    <section className="container products-container">
      {products.map((product) => (
        <Item key={product.pid} product={product} />
      ))}
    </section>
  );
}
