import React, { Component } from "react";

export default class FormSumate extends Component {

constructor(props) {
    super(props);

    this.state = {
        nombre : '',
        apellido : '',
        numerodetelefono: '',
        errornombrenull: '',
        errorapellidonull: '',
        errornumeronull: '',   
    };

    this.handleChangeNombre= this.handleChangeNombre.bind(this);
    this.handleChangeApellido= this.handleChangeApellido.bind(this);
    this.handleChangeNumerodetelefono= this.handleChangeNumerodetelefono.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

}


handleChangeNombre(event) {
    this.setState({
        nombre: event.target.value,
    })
}

handleChangeApellido(event) {
    this.setState({
        apellido: event.target.value,
    })
}


handleChangeNumerodetelefono(event) {
    this.setState({
        numerodetelefono: event.target.value,
    })
}

handleSubmit(event) {
    if((this.state.numerodetelefono.length < 6 || this.state.numerodetelefono.length > 20) && (this.state.nombre.length < 2 || this.state.nombre.length > 30) && (this.state.apellido.length < 2 || this.state.apellido.length > 30) ){   
        event.preventDefault();
        this.setState({
            errornumeronull: '*Ingrese un número de télefono valido.',
            errornombrenull: '*El nombre de tener de 2 a 30 caracteres alfabeticos.',
            errorapellidonull: '*El apellido de tener de 2 a 30 caracteres alfabeticos.',
        })
    }
    else if((this.state.nombre.length < 2 || this.state.nombre.length > 30) && (this.state.apellido.length < 2 || this.state.apellido.length > 30)){   
        event.preventDefault();
        this.setState({
            errornombrenull: '*El nombre de tener de 2 a 30 caracteres alfabeticos.',
            errorapellidonull: '*El apellido de tener de 2 a 30 caracteres alfabeticos.',
            errornumeronull: '',
        })
    }
    else if((this.state.nombre.length < 2 || this.state.nombre.length > 30) && (this.state.numerodetelefono.length < 6 || this.state.numerodetelefono.length > 20)){   
        event.preventDefault();
        this.setState({
            errornumeronull: '*Ingrese un número de télefono valido.',
            errornombrenull:'*El nombre de tener de 2 a 30 caracteres alfabeticos.',
            errorapellidonull:'',
        })
    }
    else if((this.state.apellido.length < 2 || this.state.apellido.length > 30) && (this.state.numerodetelefono.length < 6 || this.state.numerodetelefono.length > 20)){   
        event.preventDefault();
        this.setState({
            errornumeronull: '*Ingrese un número de télefono valido.',
            errornombrenull:'',
            errorapellidonull:'*El apellido de tener de 2 a 30 caracteres alfabeticos.',
        })
    }
    else if(this.state.nombre.length < 2 || this.state.nombre.length > 30){   
        event.preventDefault();
        this.setState({
            errornumeronull: '',
            errornombrenull:'*El nombre de tener de 2 a 30 caracteres alfabeticos.',
            errorapellidonull:'',
        })
    }
    else if(this.state.numerodetelefono.length < 6 || this.state.numerodetelefono.length > 20){   
        event.preventDefault();
        this.setState({
            errornumeronull: '*Ingrese un número de télefono valido.',
            errornombrenull:'',
            errorapellidonull:'',
        })
    }
    else if(this.state.apellido.length < 2 || this.state.apellido.length > 30){   
        event.preventDefault();
        this.setState({
            errornumeronull: '',
            errornombrenull:'',
            errorapellidonull:'*El apellido de tener de 2 a 30 caracteres alfabeticos.',
        })
    }
    else{  
    fetch('https://cocinafacilconessenbuild.herokuapp.com/api/sumate/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        xsrfHeaderName: "X-CSRFToken",
        body: JSON.stringify({
            nombre : this.state.nombre,
            apellido : this.state.apellido,
            numerodetelefono : this.state.numerodetelefono,
        })
    });

    event.preventDefault();
    window.alert("Formulario enviado correctamente, próximamente nos pondremos en contacto con vos!");
    window.location.replace('/');
    }
}


render() {

    return (
        <div>
            <div className="d-flex justify-content-center">
            <form className="row g-3">
                <div className="col-auto inputformsumate">
                    <label className="visually-hidden">Nombre</label>
                    <input className="form-control" id="nombre" name="nombre" placeholder="Nombre" onChange={this.handleChangeNombre}></input>
                </div>
                <div>
                    <p className="mensajeerror">{this.state.errornombrenull}</p>
                </div>
                <div className="col-auto inputformsumate">
                    <label className="visually-hidden">Apellido</label>
                    <input className="form-control" id="apellido" name="apellido" placeholder="Apellido" onChange={this.handleChangeApellido}></input>
                </div>
                <div>
                    <p className="mensajeerror">{this.state.errorapellidonull}</p>
                </div>
                <div className="col-auto inputformsumate">
                    <label className="visually-hidden">Número de telefono</label>
                    <input className="form-control" id="numerodetelefono" name="numerodetelefono" placeholder="Numero de teléfono" onChange={this.handleChangeNumerodetelefono}></input>
                </div>
                <div>
                    <p className="mensajeerror">{this.state.errornumeronull}</p>
                </div>
                <div className="d-flex justify-content-center">
                <div className="botonsuscribirse">
                    <button onClick={this.handleSubmit} className="btn btn-primary mb-3">Enviar</button>
                </div>
                </div>
            </form>
            </div>
        </div>
    );
}
}