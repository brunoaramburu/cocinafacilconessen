import React from 'react';
import './css/sobrenosotros.css';
import Estrellas from'../img/5estrellas.png';
import LogoGoogle from'../img/LogoGoogle.png';
import PerfilGoogle1 from'../img/PerfilGoogle1.png';
import PerfilGoogle2 from'../img/PerfilGoogle2.png';
import PerfilGoogle3 from'../img/PerfilGoogle3.png';
import PerfilGoogle4 from'../img/PerfilGoogle4.png';
import PerfilGoogle5 from'../img/PerfilGoogle5.png';
import OpinionComillas from'../img/opinioncomillas.png';
import BannerSobreNosotros from '../img/SobreNosotros.png';

function SobreNosotros(){

    return(
        <div className='body-b'>
            <img className='bannerrecetas' src={BannerSobreNosotros} width='100%'></img>
            <div className='container'>
                <div>
                    <h2 className='titulo-cat'>Opiniones de nuestros clientes</h2>
                </div>
                <div className='divcarousel'>
                <div id="carouselExampleControls" className="carousel slide carouselopinion" data-bs-ride="carousel">
                    <div className="carousel-inner carouselsobre">
                        <div className="carousel-item active">
                        <div className='d-flex justify-content-between imagenesopinion'>
                            <div className='d-flex justify-content-between'>
                            <img width='100px' height='100px' src={PerfilGoogle1}></img>
                            <p className='textoperfil'>Silvina</p>
                            </div>
                            <img width='30px' height='30px' src={LogoGoogle}></img>
                        </div>
                        <p className='textoopinion'>"Excelente atención, nos mostraron todos los productos que tenían y las posibilidades de financiarlos. Me alcanzaron hasta mi domicilio parte del pedido un domingo al mediodía porque mi hija se volvía a su casa en Bs As. Más, imposible!!"</p>
                        <img className='estrellas' width='130px' height='49px' src={Estrellas}></img>
                        <img className='comillas' width='70px' height='70px' src={OpinionComillas}></img>
                        </div>
                        <div className="carousel-item">
                        <div className='d-flex justify-content-between imagenesopinion'>
                            <div className='d-flex justify-content-between'>
                            <img width='100px' height='100px' src={PerfilGoogle2}></img>
                            <p className='textoperfil'>Daniela</p>
                            </div>
                            <img width='30px' height='30px' src={LogoGoogle}></img>
                        </div>
                        <div className='itemsobre'>
                        <p className='textoopinion'>"Un trato muy amable, correcto, paciente, se cumplió en tiempo y en forma con cada paso de la compra. Excelente!!!"</p>
                        <img className='estrellas' width='130px' height='49px' src={Estrellas}></img>
                        <img className='comillas' width='70px' height='70px' src={OpinionComillas}></img>
                        </div>
                        </div>    
                        <div className="carousel-item">
                        <div className='d-flex justify-content-between imagenesopinion'>
                            <div className='d-flex justify-content-between'>
                            <img width='100px' height='100px' src={PerfilGoogle3}></img>
                            <p className='textoperfil'>Cecilia</p>
                            </div>
                            <img width='30px' height='30px' src={LogoGoogle}></img>
                        </div>
                        <div className='itemsobre'>
                        <p className='textoopinion'>"Sofia fue muy amable muy claro todo y aún hoy sigue respondiendo mis preguntas o dudas por whatsapp"</p>
                        <img className='estrellas' width='130px' height='49px' src={Estrellas}></img>
                        <img className='comillas' width='70px' height='70px' src={OpinionComillas}></img>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <div className='d-flex justify-content-between imagenesopinion'>
                            <div className='d-flex justify-content-between'>
                            <img width='100px' height='100px' src={PerfilGoogle4}></img>
                            <p className='textoperfil'>Alvaro</p>
                            </div>
                            <img width='30px' height='30px' src={LogoGoogle}></img>
                        </div>
                        <div className='itemsobre'>
                        <p className='textoopinion'>"Excelente atención! Muy recomendable! Gracias por la receta del puré!!!"</p>
                        <img className='estrellas' width='130px' height='49px' src={Estrellas}></img>
                        <img className='comillas' width='70px' height='70px' src={OpinionComillas}></img>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <div className='d-flex justify-content-between imagenesopinion'>
                            <div className='d-flex justify-content-between'>
                            <img width='100px' height='100px' src={PerfilGoogle5}></img>
                            <p className='textoperfil'>Monica</p>
                            </div>
                            <img width='30px' height='30px' src={LogoGoogle}></img>
                        </div>
                        <p className='textoopinion'>"Hola, es genial poder de alguna manera decirte lo altamente recomendables que son no solo por los productos si y muyyy importante por la atencion que tenemos los posibles clientes hasta serlos y nunca dejan de brindar un excelente servicio, graciassss por todo y vamos por mas, FELICITACIONES"</p>
                        <img className='estrellas' width='130px' height='49px' src={Estrellas}></img>
                        <img className='comillas' width='70px' height='70px' src={OpinionComillas}></img>
                        </div>
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
                </div>
                <div>
                    <h2 className='titulo-cat'>Donde estamos</h2>
                </div>
                <div className='containermapa'>
                    <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.1436961659048!2d-60.661392463434474!3d-32.93747961421275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab090d4236cd%3A0xaf02b2f7da93f5ff!2sCocina%20F%C3%A1cil%20con%20Essen!5e0!3m2!1ses-419!2sar!4v1664752155620!5m2!1ses-419!2sar" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default SobreNosotros