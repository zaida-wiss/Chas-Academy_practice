import './AppLayout.css';
import {NavLink} from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to= "/">Dashboard</NavLink></li>
          <li><NavLink to= "/history">History</NavLink></li>
          <li><NavLink to= "/settings">Settings</NavLink></li>
          <li><NavLink to= "/timer">Timer</NavLink></li>
        </ul>
      </nav>
    </>
  )
}