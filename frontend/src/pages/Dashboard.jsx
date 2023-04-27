import Item from "../components/Item";

// styles
import "./Dashboard.css";

export default function Dashboard() {
  const loop = [0, 1, 2, 3, 4, 5, 6];
  return (
    <section className="container products-container">
      {loop.map((loo) => (
        <Item key={loo} pic={loo} />
      ))}
    </section>
  );
}
