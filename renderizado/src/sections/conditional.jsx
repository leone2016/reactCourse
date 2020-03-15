import React, {Component} from 'react';
class ComponentA extends Component {
    render() {
        return (
            <div>
                COMPONENTE A
            </div>
        );
    }
}
class ComponentB extends Component {
    render() {
        return (
            <div>
                COMPONENTE B
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
        this.state = { mostrarA: true }
    }
    render() {
        // const conditionalComponent = useConditionalRendering(this.state.mostrarA)
        const conditionalComponent = this.state.mostrarA ? <ComponentA/> : <ComponentB/>
        return (
            <div>
                <h4>Conditional Section</h4>
                {conditionalComponent}
            </div>
        );
    }
}

export default ConditionalSection;
