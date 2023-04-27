// imports from react router dom
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// components
import Main from "./layouts/Main";
import Dashboard from "./pages/Dashboard";
import Product, { productLoader } from "./pages/Product";
import Orders from "./pages/Orders";
import Purchase from "./pages/Purchase";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<Dashboard />} />
      <Route path="product/:id" element={<Product />} loader={productLoader} />
      <Route path="purchase" element={<Purchase />} />
      <Route path="orders" element={<Orders />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
