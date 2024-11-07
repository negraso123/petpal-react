// Layout.js
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="h-svh m-0 p-0 box-border bg-marron-500 pl-5 pt-5">
        <Outlet />{" "}
        {/* Aquí se renderizará el contenido específico de cada ruta */}
      </main>
    </div>
  );
};

export default Layout;
