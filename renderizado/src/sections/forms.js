import React, {Component} from 'react';

class Forms extends Component {
    // Componentes descontrolados, se lo llama asi ya que no tenemos ningun control sobre los componentes, hay que consultar el arbol de elementos del html
    // componentes controlados, se declaran los componentes en el state inicial (constructor), por lo tanto el state de cada componente hay que cambiarlo manualmente
    constructor() {
        super();
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true,

        }
    }
    handlerSubmit = (e)=>{
        e.preventDefault();
        // const name = this.inputName.value;
        // const twitter = document.getElementById('twitter').value;
        // console.log(name, twitter);
        console.log(this.state)
    }
    handlerChange = (e)=>{
        console.log('Handler Change');
        this.setState({inputTerms: e.target.checked});
        console.log(e.target.checked);
    }
    render() {
        return (
            <div>
                <h4> Formularios </h4>
                <form onSubmit={this.handlerSubmit}>
                    <section>
                        <label htmlFor="name">name</label>
                        <input type="text" id={'name'}
                               name={'userName'} placeholder={'introduce el nombre'}
                               ref={inputElement => this.inputName = inputElement}
                               onChange={e => this.setState({inputName: e.target.value})}
                               value={this.state.inputName}
                        />
                    </section>
                    <section>
                        <label htmlFor="twitter">twitter:</label>
                        <input type="text" id={'twitter'} name={'twitterAccount'} placeholder={'introduce tu twitter'}
                               onChange={e => this.setState({inputTwitter: e.target.value})}
                        value={this.state.inputTwitter}
                        />
                    </section>
                    <p>
                        <label htmlFor="">
                            <input type="checkbox" onChange={this.handlerChange}
                                   checked={this.state.inputTerms}
                            />
                            Acceptar condiciones
                            
                        </label>
                    </p>
                    <button>E N V I A R  </button>
                </form>
            </div>
        );
    }
}

export default Forms;