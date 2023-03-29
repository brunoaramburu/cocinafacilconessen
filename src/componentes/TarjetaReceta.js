import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/tarjetaproducto.css'
import './css/tarjetareceta.css'
import Comensales from '../img/comensales.png'
import Duracion from '../img/duracion.png'

const TarjetaReceta = () => {

  const {nombre} = useParams()
  
  const [receta, setReceta] = useState([])
  
  const obtenerReceta = async () => {
    const response = await fetch(`https://cocinafacilconessen.com.ar/api/receta/${nombre}/`)
    const responseJSON = await response.json()
    setReceta(responseJSON)
  }
  useEffect(() => {
    obtenerReceta()
  }, [])
  
  const [otrasrecetas, setOtrasRecetas] = useState([])
  
  const obtenerOtrasRecetas = async () => {
    const response = await fetch('https://cocinafacilconessen.com.ar/api/receta/')
    const responseJSON = await response.json()
    setOtrasRecetas(responseJSON)
  }
  useEffect(() => {
    obtenerOtrasRecetas()
  }, [])

  const [productos, setProductos] = useState([])
  
  const obtenerProductos = async () => {
    const response = await fetch('https://cocinafacilconessen.com.ar/api/producto/')
    const responseJSON = await response.json()
    setProductos(responseJSON)
  }
  useEffect(() => {
    obtenerProductos()
  }, [])
  
  function mezclarArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
  } 
    
    return (
        <div className="container">
            <div className='row'>
                <div className='col-7'>
                    <img src={receta.imagen} className="productoimg recetaimg" alt={receta.nombre}></img>
                </div>
                <div className='col-3'>
                    <div>
                    <h2 className='titulo-producto'>{receta.nombre}</h2>
                    </div>
                    <div>
                    <p>Comensales: <img src={Comensales} height='25px' width='25px'></img>{receta.comensales}</p>
                    </div>
                    <div>
                    <p>Duración: <img src={Duracion} height='20px' width='20px'></img> {receta.duracion}</p>
                    </div>
                    <div>
                    <h4>Productos utilizados</h4>
                    <div className='row'>
                    { 
                    productos && productos.filter(productos => 
                        productos.nombre == receta.productoutilizado1 
                        || productos.nombre == receta.productoutilizado2
                        || productos.nombre == receta.productoutilizado3
                        )
                    .map( (productos, index)=>{
                        return  <div className='col-5 col-5-recetas'>  
                        <div className='card-productos card-productos-tarjetareceta'>	
                        <span className="border-bottom-0">
                        <a href={`/productos/${productos.nombre}`}>
                        <div className="card">						
                        <img src={productos.imagen} className="img-thumbnail" alt={productos.nombre}></img>						
                            <div className="card-body">
                                <div className='d-flex justify-content-center'>    
                                    <h5 className="card-title card-title-tarjetareceta" align='center'><div>{productos.nombre}</div></h5>
                                </div>       
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
            <div className='row preparacion-ingredientes-pc'>
                <div className='col-7 col-recetas'>
                    <div>
                        <h4>Preparación</h4>
                        <div className='textop' dangerouslySetInnerHTML={{ __html: receta.preparacion}}/>
                    </div>
                </div>
                <div className='col-3 col-recetas'>
                    <div>
                        <h4>Ingredientes</h4>
                        <div className='textop' dangerouslySetInnerHTML={{ __html: receta.ingredientes}}/>
                    </div>
                </div>
            </div>
            <div className='row preparacion-ingredientes-mobile'>
                <div className='col-3 col-recetas'>
                    <div>
                        <h4>Ingredientes</h4>
                        <div className='textop' dangerouslySetInnerHTML={{ __html: receta.ingredientes}}/>
                    </div>
                </div>
                <div className='col-7 col-recetas'>
                    <div>
                        <h4>Preparación</h4>
                        <div className='textop' dangerouslySetInnerHTML={{ __html: receta.preparacion}}/>
                    </div>
                </div>
            </div>
            <div>
                <h4>Otras recetas</h4>
                <div className='d-flex justify-content-center'>
                <div className='col'>                         
                    <div className='row'>				
                    {mezclarArray(otrasrecetas)}   
                    {  
                    otrasrecetas && otrasrecetas.filter(otrasrecetas => 
                    otrasrecetas.nombre != receta.nombre).slice(0, 4).map ( (otrasrecetas, index)=>{
                        return  <div className='col-sm-3'>
                        <div className='card'>	
                        <span className="border-bottom-0">
                        <a href={`/receta/${otrasrecetas.nombre}`} >		
                            <img src={otrasrecetas.imagen} className="img-thumbnail" alt={otrasrecetas.nombre}></img>						
                            <div className="card-body">
                            <div className='d-flex justify-content-center'>
                            <h5 className="card-title" align='center'>{otrasrecetas.nombre}</h5>
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
        </div>
    )
}

export default TarjetaReceta