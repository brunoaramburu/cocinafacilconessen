import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/productos.css';
import FotoBusqueda from '../img/busqueda.png';
import BannerProductos from '../img/ProductosB.png';

function Combos() {
	const url = 'https://cocinafacilconessen.com.ar/api/combos/'
	const [producto, setProducto] = useState()
    const [columnaproductos, setColumnaProducto] = useState()
    const [busqueda, setBusqueda] = useState("")

	const fetchApi = async () => {
		const response = await fetch(url)
		const responseJSON = await response.json()
		setProducto(responseJSON)
        setColumnaProducto(responseJSON)
	}
	
    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
      
    const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=columnaproductos.filter((elemento)=>{
        if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ){
        return elemento;
        }
    });
    setProducto(resultadosBusqueda);
    }
    
    useEffect(() => {
		fetchApi()
	}, [])
	
	return (			            
        <div className='body-b'>
            <img className='bannerproductos' src={BannerProductos} alt='Combos Essen' width='100%'></img>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <div className="input-group mb-3">
                            <input
                            className="form-control"
                            value={busqueda}
                            placeholder="Buscar productos"
                            onChange={handleChange}
                            />
                            <div className="input-group-append">
                                <div className="btn btn-outline-secondary"><img src={FotoBusqueda} width='20px' height='20px'></img></div>
                            </div>    
                        </div>   
                        <div className='columnaproductospc'>
                        <h2 className='titulo'>Categorias</h2>
                        <div className="list-group">
                            <a href="/productos/productos" className="list-group-item list-group-item-action">Productos</a>
                            <a href="/productos/bazarpremium" className="list-group-item list-group-item-action">Bazar Premium</a>
                            <a href="/productos/combos" className="list-group-item list-group-item-dark">Combos</a>
                            <a href="/productos/complementos" className="list-group-item list-group-item-action">Complementos</a>
                        </div>
                        </div>        
                        <div className='columnaproductosmobile'>
                            <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </button>
                            <ul className="dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                <li><a className="dropdown-item" href="/productos/productos">Productos</a></li>
                                <li><a className="dropdown-item" href="/productos/bazarpremium">Bazar Premium</a></li>
                                <li><a className="dropdown-item" href="/productos/combos">Combos</a></li>
                                <li><a className="dropdown-item" href="/productos/complementos">Complementos</a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-7'>                    
                        <div className='row'>
                        {/* LISTA PRODUCTOS */} 				
                        { !producto ? 'Cargando...' :
                        producto.map( (producto, index)=>{
                            return  <div className='card-productos'>	
                            <span className="border-bottom-0">
                            <a href={`/productos/${producto.nombre}`}>
                            <div className="card">						
                            <img src={producto.imagen} className="img-thumbnail" alt={producto.nombre}></img>						
                                <div className="card-body">
                                    <div className='d-flex justify-content-center'>    
                                        <h5 className="card-title" align='center'><div>{producto.nombre}</div></h5>
                                    </div>       
                                </div>   
                            </div>
                            </a>
                            </span>
                            </div>
                        })
                        }
                        </div>		
                    </div>
                </div>
            </div>
        </div>        				        		
	);
}

export default Combos