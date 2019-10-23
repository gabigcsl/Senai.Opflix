import React, {Component} from "react";
import './categorias.css';
import Axios from 'axios';


export default class categorias extends Component {

    constructor (){
        super();
        this.state = {
            lista:[]
        }
    }

    componentDidMount = (event) => {
        this.props.history.push('/categorias')
    }

    atualizarCategorias =(event) =>{
        event.preventDefault();

        Axios.post("http://localhost:5000/api/Categorias",{
            
        })
    }

    render(){
        return(
<tr>

                <h1 className="categorias">CATEGORIAS</h1>

                <p>TERROR</p>
                <p>SUSPENSE</p>
                <p>COMÉDIA</p>
                <p>DRAMA</p>
                <p>ROMANCE</p>
                <tr>
                    {this.state.lista}
                </tr>
</tr>
        );
    }
    
}
