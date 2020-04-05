import React, { Component } from 'react';
import './App.css';
import ConditionalSection from '../src/sections/conditional'
import Forms from '../src/sections/forms'
import Box from './sections/children';
import PropTypes from 'prop-types'
import FetchExample from './sections/fetch-example';

class Articulo extends Component{
  static propTypes = {
    author: PropTypes.string.isRequired
  }

  render(){
    //destructuracion 
    const { author, title, date, children } = this.props;
      return (
          <section>
              <h2>{title}</h2>
              <p><em>Escrito por {author} </em></p>
              <Box> {date} </Box>
              <article>
                  {children}
              </article>
          </section>
      )
  }
}
function App() {
  return (
    <div className="App">
        <ConditionalSection></ConditionalSection>
        <Forms></Forms>
        <Box> Hola soy un children !</Box>
        <Box> H E L L O___W O R L D </Box>
        <hr/>
        <Articulo 
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la prop children'
        >
            <p>El contenido envolvemos dentro del componente <b>Articulo</b> será enviado al componente como <b>this.props.children</b></p>
            <strong> Y mantiene las etiquetas y componentes que hayáis creado dentro </strong>
        </Articulo>
        <br/>
        <br/>
        <br/>
        <FetchExample></FetchExample>
    </div>
  );
}

export default App;
