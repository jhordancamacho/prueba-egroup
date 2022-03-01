import './Header.css';
import logo from '../../assets/Images/logo-header.png'
import { Link } from 'wouter';
export default function Header() {
  
  return (
      <>
        <div className="header">
        <img className="logo" src={logo} alt="logo"></img>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    <li><Link to="./" id="linkWouter">Home</Link></li>
    <li><Link to="/empresa" id="linkWouter">Bendita Empresa</Link></li>
    <li><Link to="/empanada" id="linkWouter">Bendita Empanada</Link></li>
    <li><Link to="/contacto" id="linkWouter">Contacto</Link></li>
  </ul>
      </div>
    </>
      )
}