import "./Navbar.scss";
import { PersonalBtn } from "./PersonalBtn/PersonalBtn";
import 'materialize-css'

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <h3 className="logo">LOGO</h3>
      <div className="navbar-menu">
        <i className="material-icons navbar-bell">notifications</i>
        <PersonalBtn />
      </div>
    </div>
  )
}