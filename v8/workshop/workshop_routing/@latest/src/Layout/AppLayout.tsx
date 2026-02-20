import './AppLayout.css';
import {NavLink} from 'react-router-dom';
import type{AppLayoutProps} from '../types';

export default function AppLayout({children}: AppLayoutProps) {
  return (
    <>
      <nav className = "navbar" style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      background: 'black',
      color: 'white',
      padding: '1rem',
      gap: '1rem',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000
    }}>
        <ul className="nav-list" style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1rem',
          margin: 0,
          padding: 0}}>
          <li><NavLink to= "/">Dashboard</NavLink></li>
          <li><NavLink to= "/history">History</NavLink></li>
          <li><NavLink to= "/settings">Settings</NavLink></li>
          <li><NavLink to= "/timer">Timer</NavLink></li>
        </ul>
      </nav>

      <main style={{
        marginTop: '4rem',
        padding: '1rem'}}>
          <div>{children}</div>
          </main>


      <footer style={{
          textAlign: 'center',
          color: 'white',
          margin: 0,
          padding: '1rem',
          justifyContent: 'flex-end',
          background: 'black',
          width: '100%',
          position: 'fixed',
          bottom: 0,
          left: 0
          }}>
        <p >Pro Flow v1.0</p>

      </footer>
    </>
  )
}