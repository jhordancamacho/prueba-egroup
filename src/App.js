import './App.css';
import Header from './components/Header/Header.js';
import { Route } from 'wouter';
import Slider from './components/Slider/Slider';
import Bienvenida from './components/Bienvenida/Bienvenida';
import ProductosPrincipales from './components/ProductosPrincipales/ProductosPrincipales';
import ContactoHome from './components/ContactoHome/ContactoHome';
import InformacionContacto from './components/InformacionContacto/InformacionContacto';
import BenditaEmpresa from './components/BenditaEmpresa/BenditaEmpresa';

function App() {
  return (<>
    <Header ></Header>
    <Slider></Slider>
      <Route path="/" component={Bienvenida} />
      <Route path="/" component={ProductosPrincipales} />
    <Route path="/" component={ContactoHome} />
    <Route path="/contacto" component={ContactoHome} />
    
    {/*Ruta bendita empresa page */}
    <Route path="/empresa" component={BenditaEmpresa} />

    {/*Ruta Bendita empanada ''productos*/}
    <Route path="/empanada" component={ProductosPrincipales} />
    

    <InformacionContacto></InformacionContacto>
  </>
    );
}

export default App;
