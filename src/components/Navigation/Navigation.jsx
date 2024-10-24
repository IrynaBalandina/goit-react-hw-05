import clsx from "clsx";
import style from './Navigation.module.css';
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const buildLinkClasses = ({isActive})=>clsx(style.link, isActive && style.active);
  return (
    <div>
      <nav className={style.nav}>
        <NavLink to="/" className={buildLinkClasses}>
          Home
        </NavLink>

        <NavLink to="/movies" className={buildLinkClasses}>
          Movies
        </NavLink>
      </nav>
    </div>
  )
}

export default Navigation;