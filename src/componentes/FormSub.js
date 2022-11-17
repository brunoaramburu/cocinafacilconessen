import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const FormSub = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9c88ggg', 'template_zx1yj7t', form.current, 'I7fbPNb8noiNC5Yx3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      window.alert("Te suscribiste correctamente!");
      window.location.replace('/');
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='row'>
      <div className="col-auto suscribirse inputsumate">
        <label className="visually-hidden">Nombre</label>
        <input className="form-control" type="text" name="nombre" required="required" placeholder='Nombre'/>
      </div>
      <div className="col-auto suscribirse inputsumate">
        <label className="visually-hidden">Numero de teléfono</label>
        <input className="form-control" type="tel" name="numerodetelefono" minlength="6" required="required" placeholder="Numero de teléfono"/>
      </div>
      <div className="col-auto suscribirse inputsumate">
        <input className="btn btn-primary mb-3" type="submit" value="Suscribirme" />
      </div>
    </form>
  );

};

export default FormSub