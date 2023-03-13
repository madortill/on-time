import './NavBar.styles.css'
import { Outlet } from 'react-router-dom';

const NavBar = () => {
    return (
      <div className="nav-bar">
        <Outlet></Outlet>
      </div>
    );
}
  
export default NavBar;