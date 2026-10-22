import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive');

  return (
    <nav>
      <NavLink className={setActiveClass} to='/'>
        Home
      </NavLink>
      <NavLink className={setActiveClass} to='/propiedades'>
        Propiedades
      </NavLink>
      <NavLink className={setActiveClass} to='/admin'>
        Administración
      </NavLink>
      <NavLink className={setActiveClass} to='/login'>
        Login
      </NavLink>
    </nav>
  );
}
