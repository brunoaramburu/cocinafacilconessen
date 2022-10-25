import React from 'react';
import './css/whatsapp.css';

function BotonWsp() {
    
    return (
    <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
            <a href="https://api.whatsapp.com/send?phone=+5493415443231&text=Hola%21%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20de%20Essen." className="float" target="_blank">
                <i className="fa fa-whatsapp my-float"></i>
            </a>
    </div>
    );
}
{/* BOTON FLOTANTE WHATSAPP CAMBIAR LINK https://youtu.be/dL6K3UjWgDA */}
export default BotonWsp