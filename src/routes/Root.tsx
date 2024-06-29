import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Root() {
  return (
    <main className="p-2 md:p-0 antialiased">
      <Header />
      <Outlet />
    </main>
  );
}

export default Root;
