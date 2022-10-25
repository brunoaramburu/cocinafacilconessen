import React from 'react';
import './css/sumate.css';
import BannerSumate from '../img/Sumate.png';
import FormSumate from './FormSumate';
import logowsp from '../img/logowsp.png'

function Sumate(){

    const linkWsp = 'https://api.whatsapp.com/send?phone=+5493415443231&text=Hola%21%20Quiero%20sumarme%20a%20su%20equipo.'

    return(
        <div className='body-b'>
            <img className='bannerrecetas' src={BannerSumate} width='100%'></img>
            <div className='container'>
            <div className='d-flex justify-content-center'>
            <p>Rellena el formulario y nos pondremos en contacto con vos!</p>
            </div> 
            <FormSumate/>
            <div className='d-flex justify-content-center'>
            <a className='btn btn-success' href={linkWsp}>
                <p>O contactanos por WhatsApp <img src={logowsp} width='30px' height='30px'></img></p>
            </a>
            </div>    
            </div>
        </div>        
    )
}

export default Sumate