import './App.css';
import {
BrowserRouter as Router,
Routes,
Route
} from "react-router-dom";
import React, {Fragment} from 'react';

import Navbar from './componentes/Navbar';
import Inicio from "./componentes/Inicio";
import Productos from "./componentes/Productos";
import SobreNosotros from "./componentes/SobreNosotros";
import Footer from './componentes/Footer';
import TarjetaProducto from './componentes/TarjetaProducto';
import Recetas from './componentes/Recetas';
import ProductosCat from './componentes/ProductosCat';
import Combos from './componentes/Combos';
import BazarPremium from './componentes/BazarPremium';
import Complementos from './componentes/Complementos';
import RecetasProducto from './componentes/RecetasProducto';
import TarjetaReceta from './componentes/TarjetaReceta';
import BotonWsp from './componentes/BotonWsp';
import FormSub from './componentes/FormSub';
import Sumate from './componentes/Sumate';

function App() {
  return (
      <div>
         <Router>
            <Navbar />
            <BotonWsp />
            <div>
                  <div>
                     <Routes>                                   
                        <Route exact={true} path="/" element={<Inicio/>}/>
                        <Route exact={true} path="/recetas" element={<Recetas/>}/>
                        <Route exact={true} path="/sobrenosotros" element={<SobreNosotros/>}/>
                        <Route exact={true} path="/productos" element={<Productos/>}/>
                        <Route exact={true} path="/productos/productos" element={<ProductosCat/>}/>                       
                        <Route exact={true} path="/productos/combos" element={<Combos/>}/>                         
                        <Route exact={true} path="/productos/bazarpremium" element={<BazarPremium/>}/>                     
                        <Route exact={true} path="/productos/complementos" element={<Complementos/>}/>                    
                        <Route exact={true} path="/productos/:nombre" element={<TarjetaProducto/>}/>        
                        <Route exact={true} path="/recetas/:nombre" element={<RecetasProducto/>}/>      
                        <Route exact={true} path="/receta/:nombre" element={<TarjetaReceta/>}/>
                        <Route exact={true} path="/sumate" element={<Sumate/>}/>      
                     </Routes>
                  </div>
               </div> 
               <Footer/>
         </Router>
      </div>
    );
}
export default App;