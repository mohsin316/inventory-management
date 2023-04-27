// react router dom
import { Outlet } from "react-router-dom";

// components
import Nav from "../components/Nav";

export default function Main() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
