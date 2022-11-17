import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const FormSumate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9c88ggg', 'template_8stb38t', form.current, 'I7fbPNb8noiNC5Yx3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      window.alert("El formulario se envio correctamente!");
      window.location.replace('/');
  };

  return (
    <div className='d-flex justify-content-center'>
        <form ref={form} onSubmit={sendEmail} className='row'>
            <div className="col-auto suscribirse inputsumate">
                <label className="visually-hidden">Nombre</label>
                <input className="form-control" type="text" name="nombre" required="required" placeholder='Nombre'/>
            </div>
            <div className="col-auto suscribirse inputsumate">
                <label className="visually-hidden">Apellido</label>
                <input className="form-control" type="text" name="apellido" required="required" placeholder='Apellido'/>
            </div>
            <div className="col-auto suscribirse inputsumate">
                <label className="visually-hidden">Numero de teléfono</label>
                <input className="form-control" type="tel" name="numerodetelefono" minlength="6" required="required" placeholder="Numero de teléfono"/>
            </div>
            <div className="col-auto botonsuscribirse inputsumate">
                <input type="submit" value="Enviar" className="btn btn-primary mb-3"/>
            </div>
        </form>
    </div>
  );

};

export default FormSumate