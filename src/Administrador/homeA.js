import React, {Component} from "react";
import './homeA.css';


export default class homeA extends Component {

direcionar = (event) => {
    this.props.history.push('/cadastro')
}

render(){
    return(
        <div className="homeA">
        <h1>ADMINISTRADOR</h1>
        <h2>Lançamentos</h2>
        <div className="ce">
        <button onClick = {this.direcionar}>Cadastrar</button>
        </div>

        </div>

    );
}

}
