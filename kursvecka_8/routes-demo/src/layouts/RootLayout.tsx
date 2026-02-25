import { NavLink, Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '16px' }}>
      <header
        style={{
          borderBottom: '2px solid lightgrey',
          paddingBottom: '12px',
          marginBottom: '24px',
        }}
      >
        <nav style={{ display: 'flex', gap: '16px' }}>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? '#0000FF' : '#999',
              textDecoration: 'none',
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? '#0000FF' : '#999',
              textDecoration: 'none',
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? '#0000FF' : '#999',
              textDecoration: 'none',
            })}
          >
            Products
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
