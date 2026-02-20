import { NavLink, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="layout">
      <nav>
        {/* NavLink gör det enkelt att styla den aktiva länken */}
        <NavLink to="/" end>Hem</NavLink>
        <NavLink to="/products">Produkter</NavLink>
      </nav>
      <main>
        <Outlet /> {/* Här renderas den aktuella undersidan */}
      </main>
    </div>
  );
}