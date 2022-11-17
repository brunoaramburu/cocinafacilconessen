import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/inicio.css';
import './css/video.css';
import './css/form.css';
import BazarPremium from '../img/BazarPremium.jpg';
import Combos from '../img/Combos.jpg';
import Complementos from '../img/Complementos.jpg';
import Productos from '../img/Productos.jpg';
import Envios from '../img/envios.png';
import FormasDePago from '../img/formasdepago.png';
import GarantiaOficial from '../img/garantiaoficial.png';
import Carrousel1 from'../img/1.jpg';
import Carrousel2 from'../img/2.jpg';
import Carrousel3 from'../img/3.jpg';
import Carrousel4 from'../img/4.jpg';
import { useState, useEffect } from 'react';
import FormSub from './FormSub';

function Inicio () {
	const url = 'https://cocinafacilconessen.com.ar/api/recetas_recientes/'
	const [receta, setReceta] = useState()
	const fetchApi = async () => {
		const response = await fetch(url)
		const responseJSON = await response.json()
		setReceta(responseJSON)
	}
	useEffect(() => {
		fetchApi()
	}, [])

    const urlCarousel = 'https://cocinafacilconessen.com.ar/api/carousel/'
	const [carousel, setCarousel] = useState()
	const fetchCarousel = async () => {
		const response = await fetch(urlCarousel)
		const responseJSON = await response.json()
		setCarousel(responseJSON)
	}
	useEffect(() => {
		fetchCarousel()
	}, [])

    return (
        <div>      
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    { !carousel ? 'Cargando...' :
                    carousel.map( (carousel, index)=>{
                        return(<div className="carousel-item">
                        <img src={carousel.imagen} className="d-block w-100" alt="Promo Essen"></img>
                        </div>
                        )})
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='d-flex justify-content-center'>
            <div className='row'>
                <div className='col coltarjetaitems'>
                    <div className="card text-center tarjetaitems" >
                    <div className="card-body">
                            <img className='imgitems' src={Envios} alt="Envios" width="50" height="50"></img>
                            <p className="card-text">Envios gratis a todo el pais</p>
                    </div>
                    </div>
                </div>
                <div className='col coltarjetaitems'>
                    <div className="card text-center tarjetaitems" >
                    <div className="card-body">
                        <img className='imgitems' src={GarantiaOficial} alt="Garantia Essen" width="50" height="50"></img>
                        <p className="card-text">Garantia oficial en todos los productos</p>
                    </div>
                    </div>
                </div>
                <div className='col coltarjetaitems'>
                    <div className="card text-center tarjetaitems" >
                    <div className="card-body">
                        <img className='imgitems' src={FormasDePago} alt="Formas de pago Essen" width="50" height="50"></img>
                        <p className="card-text">Ahora 12 sin interes</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>     
            <div className='container'>
            <h2 className='titulo-cat'>Categorias</h2>
            <div className='d-flex justify-content-center'>				
            <div className="col-10 columnacategorias">
				<div className="row">				
                    <div className="col-sm-3">			            	 	
                    <span className="border-bottom-0"></span>
                    <a href='/productos/combos'>
                    <div className="card card-inicio">						
                    <img src={Combos} className="img-thumbnail" alt="Combos Essen"></img>						
                    <div className="card-body">
                    <h5 className="card-title" align='center'>Combos</h5>					
                    </div>
                    </div>
                    </a>
                    </div> 
                    <div className="col-sm-3">				 	
                    <span className="border-bottom-0"></span>
                    <a href='/productos/productos'>
                    <div className="card card-inicio">						
                    <img src={Productos} className="img-thumbnail" alt="Productos Essen"></img>						
                    <div className="card-body">
                    <h5 className="card-title" align='center'>Productos</h5>	
                    </div>
                    </div>
                    </a>
                    </div>                 
                    <div className="col-sm-3">			                   	 	
                    <span className="border-bottom-0"></span>
                    <a href='/productos/complementos'>
                    <div className="card card-inicio">						
                    <img src={Complementos} className="img-thumbnail" alt="Complementos Essen"></img>						
                    <div className="card-body">
                    <h5 className="card-title" align='center'>Complementos</h5>					
                    </div>
                    </div>
                    </a>
                    </div>
                    <div className="col-sm-3">			 	 	
                    <span className="border-bottom-0"></span>
                    <a href='/productos/bazarpremium'>
                    <div className="card card-inicio">						
                    <img src={BazarPremium} className="img-thumbnail" alt="Bazar premium Essen"></img>						
                    <div className="card-body">
                    <h5 className="card-title" align='center'>Bazar Premium</h5>					
                    </div>
                    </div>
                    </a>               
                    </div>
				</div>
			</div>			
            </div>
            <div className='d-flex justify-content-center'>
            <div className='video-cel'>
            <div className='container-xl'>
                <div className='row align-items-center'>
                    <div className='col-video-cel'>
                    <div className='col'>
                        <div className='video-contenedor'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Awj6PDiw6l4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    </div>
                    <div className='col'>
                        <div className="presentacion">
                        <h2>Hola! somos Sofi y Seba</h2>
                        Te queremos contar el secreto de por qué ahorras cocinando con una Essen.
                        La función horno de una Essen hace que reemplaces por completo el horno, uno de los mayores gastos de energía de una casa.
                        Mientras que el horno equivale a seis hornallas al máximo al mismo tiempo, con una Essen apenas necesitas una sola y a fuego mínimo o corona. 
                        Según el estudio del INTI, con Essen ahorras un 70% de gas.
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div className='video-pc'>
            <div className='container-xl'>
                <div className='row align-items-center'>
                    <div className='col'>
                        <div className='video-contenedor'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Awj6PDiw6l4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="presentacion">
                        <h2 className='titulo-pres'>Hola! somos Sofi y Seba</h2>
                        Te queremos contar el secreto de por qué ahorras cocinando con una Essen.
                        La función horno de una Essen hace que reemplaces por completo el horno, uno de los mayores gastos de energía de una casa.
                        Mientras que el horno equivale a seis hornallas al máximo al mismo tiempo, con una Essen apenas necesitas una sola y a fuego mínimo o corona. 
                        Según el estudio del INTI, con Essen ahorras un 70% de gas. 
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='container'>
                <h2 className='titulo-cat ultrecetas'>Ultimas recetas</h2>
            </div>    
            <div className='d-flex justify-content-center'>
            <div className='col-10 columnacategorias'>                         
                <div className='row'>
                {/* LISTA RECETAS RECIENTES */} 				
                { !receta ? 'Cargando...' :
                receta.map( (receta, index)=>{
                    return  <div className='col-sm-3'>
                        <div className='card'>	
                        <span className="border-bottom-0">
                        <a href={`/receta/${receta.nombre}`} >		
                            <img src={receta.imagen} className="img-thumbnail" alt={receta.nombre}></img>						
                            <div className="card-body">
                            <div className='d-flex justify-content-center'>
                            <h5 className="card-title" align='middle'>{receta.nombre}</h5>
                            </div>
                            <div className='d-flex justify-content-center'>    
                            </div>
                            </div>   
                        </a>
                        </span>
                        </div>
                        </div>
                })
                }
                </div>		
            </div>
            </div>
            </div>	
            <div className='container'>
            <div className='d-flex justify-content-center'>
            <div className='formsub'>
            <div className='d-flex justify-content-center'>   
                <p>Suscribite para recibir ofertas y novedades</p>
            </div>
            <FormSub/>
            </div>
            </div>
            </div>   
        </div>
    )
}

export default Inicio