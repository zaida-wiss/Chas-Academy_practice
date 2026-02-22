import React, { useState } from "react";
import "./Navigation.css";

export default function Navigation({ links }) {
  const [active, setActive] = useState(links[0]?.url);

  return (
    <nav className="navBar">
      {links.map(link => (
        <a
          key={link.url}
          href={link.url}
          className={active === link.url ? "active" : ""}
          onClick={() => setActive(link.url)}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}