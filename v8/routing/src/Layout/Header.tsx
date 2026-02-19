import {Link} from "react-router-dom";

export const Header = () => {
  return (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/pool">Köp pool!</Link>
        </li>
      </ul>
    </nav>
  </header>
);
};