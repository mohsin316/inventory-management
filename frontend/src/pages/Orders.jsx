import "./Orders.css";

export default function Orders() {
  return (
    <section className="container order-container">
      <table>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Company Name</th>
            <th>Quantity</th>
            <th>status</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chair</td>
            <td>Furniture.co</td>
            <td>20</td>
            <td className="status-block">Processing</td>
            <button>deliver</button>
          </tr>
          <tr>
            <td>mobile</td>
            <td>Electronic.co</td>
            <td>25</td>
            <td
              className="status-block"
              style={{ backgroundColor: "lightgreen" }}
            >
              Delivered
            </td>
            <button>deliver</button>
          </tr>
          <tr>
            <td>Chair</td>
            <td>Furniture.co</td>
            <td>20</td>
            <td className="status-block">Processing</td>
            <button>deliver</button>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
