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
    constructor() {
        super();
        this.state = {mouseX:0, mouseY:0}
        // solucion a la funcion handlerMouseMove sin arraw function
        // this.handlerMouseMove = this.handlerMouseMove.bind(this);
    }
    handlerClick (e){
        console.log('hola Mundo 2020');
        console.log(e);
    }
    handlerMouseMove = (e)=>{
        const { clientX, clientY } = e;
        // con esto se actualiza el script del componente
        // es state es inmutable y no debemos modificarlo nunca directamente
        // this.setState no se puede utilizar aqui ya que no existe, pero se puede enlazar el metodo BIND  en el constructor o utilizar un
        // la funcion de flecha, ya que estas ultima siempre enlaza desde el contexto que se la declara
        this.setState({mouseX: clientX, mouseY: clientY});
    }
    render() {
        return (
            <div>
               <p>Bienvenido, Usuario! componenteB</p>
                <button>Cerrar Sesión</button>
                { /* se lo conoce como sintetic event */  }
                <button onClick={this.handlerClick}>hi there!</button>
                <div onMouseMove={this.handlerMouseMove}
                    style={{ border: '1px solid #000', margin: 10, padding: 10}}>
                    <p>{this.state.mouseX}</p>,
                    <p>{this.state.mouseY}</p>
                </div>
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
        this.state = { isUserLogged: false}
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
