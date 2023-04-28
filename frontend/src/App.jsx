// imports from react router dom
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// components
import Main from "./layouts/Main";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import Purchase, { companyLoader } from "./pages/Purchase";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index loader={dashboardLoader} element={<Dashboard />} />
      <Route path="product/:id" element={<Product />} />
      <Route
        path="purchase/:id"
        element={<Purchase />}
        loader={companyLoader}
      />
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
