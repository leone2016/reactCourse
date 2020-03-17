import React, {Component} from 'react';
import cars from '../data/cars.json'

class CarItem extends Component {
    render() {
        const { car } = this.props;
        return (
            <li >
                <p> <strong>Nombre:</strong>{car.name}</p>
                <p> <strong>Marca:</strong>{car.company}</p>
            </li>
        )
    }
}

class ComponentA extends Component {
    render() {
        const numbers = [1,1,3,4,5]
        return (
            <div>
                <button>Iniciar Sesión</button>
                <h4>Trabajando con listas </h4>
                {numbers.map((num, index )=>{
                    return <p key={index} > Soy el numero {num}</p>
                })}
                <h4> Trabajando listas con objetos</h4>
                <ul>
                    {
                        cars.map( car => {
                                return <CarItem key={car.id} car={car}></CarItem>
                        })
                    }
                </ul>
            </div>
        );
    }
}


class ComponentB extends Component {
    render() {
        return (
            <div>
               <p>Bienvenido, Usuario!</p>
                <button>Cerrar Sesión</button>
            </div>
        );
    }
}
function useConditionalRendering(mostrarA){
    if(!mostrarA){
        return <ComponentA/>
    }else{
        return <ComponentB/>
    }
}
class ConditionalSection extends Component {
    constructor(){
        super();
        this.state = { isUserLogged: true }
    }
    render() {
        // const conditionalComponent = useConditionalRendering(this.state.mostrarA)
        const conditionalComponent = this.state.isUserLogged ? <ComponentA/> : <ComponentB/>
        return (
            <div>
                <h4>Conditional Section</h4>
                {conditionalComponent}
            </div>
        );
    }
}

export default ConditionalSection;
