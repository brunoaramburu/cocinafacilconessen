import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/recetas.css';
import Comensales from '../img/comensales.png';
import Duracion from '../img/duracion.png';
import {useParams} from 'react-router-dom';
import BannerRecetas from '../img/Recetas.jpg';
import FotoBusqueda from '../img/busqueda.png';

function RecetasProducto() {
	
    const {nombre} = useParams()
    const [producto, setProducto] = useState([])
    
    const obtenerProducto = async () => {
        const response = await fetch(`https://cocinafacilconessen.com.ar/api/producto/${nombre}/`)
        const responseJSON = await response.json()
        setProducto(responseJSON)
    }
    
    useEffect(() => {
        obtenerProducto()
    }, [])
    
    const urlreceta = 'https://cocinafacilconessen.com.ar/api/receta/'
	const [receta, setReceta] = useState()
    const [columnarecetas, setColumnaRecetas] = useState()
    const [busqueda, setBusqueda] = useState("")

	const fetchRecetas = async () => {
		const response = await fetch(urlreceta)
		const responseJSON = await response.json()
		setReceta(responseJSON)
        setColumnaRecetas(responseJSON)
	}

    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
      
    const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=columnarecetas.filter((elemento)=>{
        if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ){
        return elemento;
        }
    });
    setReceta(resultadosBusqueda);
    }
    
	useEffect(() => {
		fetchRecetas()
	}, [])

    const urlproductos = 'https://cocinafacilconessen.com.ar/api/productospararecetas/'
    const [productos, setProductos] = useState()
    
	const fetchProductos = async () => {
		const response = await fetch(urlproductos)
		const responseJSON = await response.json()
		setProductos(responseJSON)
	}
    
	useEffect(() => {
		fetchProductos()
	}, [])

    function mensajenohayrecetas(inputArray){
        if(inputArray && inputArray.filter(inputArray => 
            inputArray.productoutilizado1 == producto.nombre 
            || inputArray.productoutilizado2 == producto.nombre 
            || inputArray.productoutilizado3 == producto.nombre
            )[0]==null){
            return <p>No hay recetas para mostrar...</p>
            
        }   
      } 
    

	return (			            
        <div className='body-b'>
            <img className='bannerrecetas' src={BannerRecetas} alt='Recetas Essen' width='100%'></img>  
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <div className="input-group mb-3">
                            <input
                            className="form-control"
                            value={busqueda}
                            placeholder="Buscar recetas"
                            onChange={handleChange}
                            />
                            <div className="input-group-append">
                                <div className="btn btn-outline-secondary"><img src={FotoBusqueda} width='20px' height='20px'></img></div>
                            </div>    
                        </div>   
                        <div className='columnaproductospc'>
                            <h2 className='titulo'>Productos utilizados</h2>
                            <div className="list-group"> 				
                            { 
                            productos && productos.filter(productos => 
                            productos.producto == nombre).map( (productos, index)=>{
                                return  <a className="list-group-item list-group-item-dark columnaproductospc" href={`/recetas/${productos.producto}`}>{productos.producto}</a>
                            }
                            )
                            }
                            {
                            productos && productos.filter(productos => 
                            productos.producto != nombre).map( (productos, index)=>{
                                return  <a className="list-group-item list-group-item-action columnaproductospc" href={`/recetas/${productos.producto}`}>{productos.producto}</a>
                            }
                            )    
                            }
                            </div>
                        </div>
                        <div className='columnaproductosmobile'>
                            <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos utilizados
                            </button>
                            <ul className="dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                { !productos ? 'Cargando...' :
                                productos.map( (productos, index)=>{
                                    return <li><a className="dropdown-item" href={`/recetas/${productos.producto}`}>{productos.producto}</a></li>
                                }
                                )
                                }
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-7'>
                        <div className='row'>			
                        { 
                        receta && receta.filter(recetas => 
                            recetas.productoutilizado1 == producto.nombre 
                            || recetas.productoutilizado2 == producto.nombre 
                            || recetas.productoutilizado3 == producto.nombre
                            )
                        .map( (receta, index)=>{
                            return  <div className='card-recetas'>	
                            <span className="border-bottom-0">
                            <a href={`/receta/${receta.nombre}`}>
                            <div className="card card-inicio">						
                            <img src={receta.imagen} className="img-thumbnail" alt={receta.nombre} ></img>						
                                <div className="card-body">
                                    <div className='card-title-cat comensales-duracion'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='container-title-cat'>
                                                <img src={Comensales} className="img img-titulo" alt="Comensaes" width="25" height="25"></img>
                                                {receta.comensales}
                                            </div>                                                
                                            <div className='container-title-cat'>
                                                <img src={Duracion} className="img img-titulo" alt="Duracion" width="25" height="25"></img>
                                                {receta.duracion}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <h5 className="card-title" align='middle'> 
                                            <div>{receta.nombre}</div>
                                        </h5>
                                    </div>  
                                </div>   
                                </div>
                                </a>
                                </span>
                                </div>
                        })
                        }
                        </div>
                        {mensajenohayrecetas(receta)}		
                    </div>
                </div>
            </div>
        </div>        				        		
	);
}

export default RecetasProducto