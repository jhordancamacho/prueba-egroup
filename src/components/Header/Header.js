import './Header.css';
import logo from '../../assets/Images/logo-header.png'
import Slider from '../Slider/Slider';
export default function Header() {
  return (
      <>
        <div class="header">
        <img class="logo" src={logo} alt="logo"></img>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a href="#work">Our Work</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#careers">Careers</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
      </div>
      <Slider></Slider>
    </>
      )
}