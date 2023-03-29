import React from 'react';
import Instagram from '../img/instagram.jpg';
import Facebook from '../img/facebook.jpg';
import Tiktok from '../img/tiktok.jpg';
import './css/footer.css'


function Footer () {
    return (
        <div className='footer'>
        <div className='footerpc'>
            <div className='d-flex justify-content-start'>
            <div> 
                <a href='https://www.facebook.com/EssenRecetasPracticas/'><img className="imgfooter facebook" src={Facebook} alt="" width="40" height="40"/></a>
            </div>
            <div>
                <a href='https://www.instagram.com/cocina.facil.con.essen/'><img className="imgfooter" src={Instagram} alt="" width="40" height="40"/></a>
            </div>
            <div>
                <a href='https://www.tiktok.com/@cocinafacilconessen'><img className="imgfooter" src={Tiktok} alt="" width="40" height="40"/></a>
            </div>
            </div>
            <div>
                <p className='copyr'>Copyright Cocina Fácil con Essen - 2023. Todos los derechos reservados.</p>
                <p className='copyr'>Web desarrollada por Bruno Aramburú</p>
            </div>
        </div>
        <div className='footermobile'>
            <div className='d-flex justify-content-center'>
            <div>
                
                <a href='https://www.facebook.com/EssenRecetasPracticas/'><img className="imgfooter facebook" src={Facebook} alt="" width="40" height="40"/></a>
            </div>
            <div>
                <a href='https://www.instagram.com/cocina.facil.con.essen/'><img className="imgfooter" src={Instagram} alt="" width="40" height="40"/></a>
            </div>
            <div>
                <a href='https://www.tiktok.com/@cocinafacilconessen'><img className="imgfooter" src={Tiktok} alt="" width="40" height="40"/></a>
            </div>
            </div>
            <div>
                <p className='copyr'>Copyright Cocina Fácil con Essen - 2023. Todos los derechos reservados.</p>
                <p className='copyr'>Web desarrollada por Bruno Aramburú</p>
            </div>
        </div>   
        </div>
    )
}

export default Footer