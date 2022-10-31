import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/tarjetaproducto.css'
import logowsp from '../img/logowsp.png'

const TarjetaProducto = () => {

  const {nombre} = useParams()
  
  const [producto, setProducto] = useState([])
  
  const obtenerProducto = async () => {
    const response = await fetch(`http://cocinafacilconessen.com.ar/api/producto/${nombre}/`)
    const responseJSON = await response.json()
    setProducto(responseJSON)
  }
  useEffect(() => {
    obtenerProducto()
  }, [])

  const [productosrelacionados, setProductosRelacionados] = useState([])
  
  const obtenerProductosRelacionados = async () => {
    const response = await fetch('http://cocinafacilconessen.com.ar/api/producto/')
    const responseJSON = await response.json()
    setProductosRelacionados(responseJSON)
  }
  useEffect(() => {
    obtenerProductosRelacionados()
  }, [])

  const linkWsp = `https://api.whatsapp.com/send?phone=+5493415443231&text=Hola%21%20Me%20interesó%20el%20siguiente%20producto:%20${nombre},%20quiero%20mas%20información.`
  
  function mezclarArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
  } 

    return (
      <div className="container container-tarjetaproducto">
        <div className='row'>
          <div className='col-6'>
            <img src={producto.imagen} className="productoimg" alt={producto.nombre}></img>
            <div className='d-flex justify-content-center'>
              <a className='btn btn-success' href={linkWsp}><img src={logowsp} className="logowsp" alt="..."></img>Contactanos por este producto</a>
            </div>
          </div>
          <div className='col-4'>
            <div>
              <h2 className='titulo-producto'>{producto.nombre}</h2>
            </div>
            <div>
              <div className='textop' dangerouslySetInnerHTML={{ __html: producto.descripcion}}/>
            </div>
            <div>
              <h4>Atributos del producto</h4>
              <div className='textop' dangerouslySetInnerHTML={{ __html: producto.atributos}}/>
            </div>
            <div className='botonrecetas'>
              <a className='btn btn-primary' href={`/recetas/${producto.nombre}`}>Ver recetas con este producto</a>
            </div>    
          </div>
        </div>
        <div>
          <h4 className='titulorelacionados'>Productos relacionados</h4>
          <div className='d-flex justify-content-center'>
          <div className='col'>
            <div className='row'>				
            {mezclarArray(productosrelacionados)}   
            {  
            productosrelacionados && productosrelacionados.filter(productosrelacionados => 
            productosrelacionados.categoria == producto.categoria
              && productosrelacionados.nombre != producto.nombre).slice(0, 4).map ( (productosrelacionados, index)=>{
              return  <div className='col-sm-3'>
              <div className='card'>	
              <span className="border-bottom-0">
              <a href={`/productos/${productosrelacionados.nombre}`} >		
                  <img src={productosrelacionados.imagen} className="img-thumbnail" alt={productosrelacionados.nombre}></img>						
                  <div className="card-body">
                  <div className='d-flex justify-content-center'>
                  <h5 className="card-title" align='center'>{productosrelacionados.nombre}</h5>
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

export default TarjetaProducto