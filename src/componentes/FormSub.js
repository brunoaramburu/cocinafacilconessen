import React, { Component } from "react";

export default class FormSub extends Component {

constructor(props) {
    super(props);

    this.state = {
        nombre : '',
        numerodetelefono: '',
        errornombrenull : '',
        errornumeronull : '',
    };

    this.handleChangeNombre= this.handleChangeNombre.bind(this);
    this.handleChangeNumerodetelefono= this.handleChangeNumerodetelefono.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

}

handleChangeNombre(event) {
    this.setState({
        nombre: event.target.value,
    })
}

handleChangeNumerodetelefono(event) {
    this.setState({
        numerodetelefono: event.target.value,
    })
}

handleSubmit(event) {
    if((this.state.numerodetelefono.length < 6 || this.state.numerodetelefono.length > 20) && (this.state.nombre.length < 2 || this.state.nombre.length > 30) ){   
        event.preventDefault();
        this.setState({
            errornumeronull: '*Ingrese un número de télefono valido.',
            errornombrenull: '*El nombre de tener de 2 a 30 caracteres alfabeticos.',
        })
    }
    else if(this.state.nombre.length < 2 || this.state.nombre.length > 30){   
        event.preventDefault();
        this.setState({
            errornombrenull: '*El nombre de tener de 2 a 30 caracteres alfabeticos.',
            errornumeronull: '',
        })
    }
    else if(this.state.numerodetelefono.length < 6 || this.state.numerodetelefono.length > 20){   
        event.preventDefault();
        this.setState({
            errornumeronull: '*Ingrese un número de télefono valido.',
            errornombrenull:'',
        })
    }
    else{  
    fetch('http://cocinafacilconessen.com.ar/api/suscripciones/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        xsrfHeaderName: "X-CSRFToken",
        body: JSON.stringify({
            nombre : this.state.nombre,
            numerodetelefono : this.state.numerodetelefono,
        })
    });

    event.preventDefault();
    window.alert("Te suscribiste correctamente, próximamente recibiras ofertas y novedades!");
    window.location.replace('/');
    }
}


render() {

    return (
        <div>
            <form className="row g-3">
                <div className="col-auto suscribirse">
                    <label className="visually-hidden">Nombre</label>
                    <input className="form-control" id="nombre" name="nombre" placeholder="Nombre" onChange={this.handleChangeNombre}></input>
                </div>
                <div className="col-auto suscribirse">
                    <label className="visually-hidden">Número de telefono</label>
                    <input className="form-control" id="numerodetelefono" name="numerodetelefono" placeholder="Numero de teléfono" onChange={this.handleChangeNumerodetelefono}></input>
                </div>
                <div className="col-auto botonsuscribirse">
                    <button onClick={this.handleSubmit} className="btn btn-primary mb-3">Suscribirme</button>
                </div>
            </form>
            <div>
            <p className="mensajeerror">{this.state.errornombrenull}</p>
            </div>
            <div>
            <p className="mensajeerror">{this.state.errornumeronull}</p>
            </div>
        </div>
    );
}
}