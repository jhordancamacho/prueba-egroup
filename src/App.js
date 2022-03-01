import './App.css';
import { Route } from 'wouter';
import { Helmet } from 'react-helmet';
import Header from './components/Header/Header.js';
import Slider from './components/Slider/Slider';
import Bienvenida from './components/Bienvenida/Bienvenida';
import ProductosPrincipales from './components/ProductosPrincipales/ProductosPrincipales';
import ContactoHome from './components/ContactoHome/ContactoHome';
import InformacionContacto from './components/InformacionContacto/InformacionContacto';
import BenditaEmpresa from './components/BenditaEmpresa/BenditaEmpresa';

function App() {
  return (<>
  <Helmet>
  <meta charset="utf-8" />
  <title>Bendita Empanada</title>
  <link rel="canonical" href="http://github.com/jhordancamacho"/>
  <meta name="description" content="Testin"/>
</Helmet>
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
    
    {/* ruta para contacto */}
    <Route path="/contacto" component={ContactoHome} />

    {/* para cualquier ruta no definida */}
      <Route path=".." component={Bienvenida} />
      <Route path=".." component={ProductosPrincipales} />
    <Route path=".." component={ContactoHome} />

    <InformacionContacto></InformacionContacto>
  </>
    );
}

export default App;
