# Curso de react basico
### PropTypes 
`las propTypes: sirven para realizar un chequeo del tipo de dato de nuestras props`
 `npm i prop-types -SE` 



### conocimiento General 

```Js
// destructuracion 

const { author, title, date, children } = this.props;
```

## ciclos de vida de los componentes

hace referencia a las diferentes etapas que pasa un componente de react, la libreria nos permite ejecutar codigo personalizado en cada una de ellas, saber cuando hay que utilizarlo es imprecindible para desarrollar una aplicacion en React con exito.

El ciclo de vida de los componentes se divide en tres fases


*Fase de montaje:*

* es la primera en ejecutarse y siempre se ejecuta y solo una lo hace vez
* construye al componente con su estado inicial
* Obtiene las props que se le han pasado
* Binding (enlazamos) métodos de clase
* En el montaje se ejecuta por primera vez el render(), al terminar la ejecución ya se podrá visualizar en el DOM

![ciclo montaje](https://raw.githubusercontent.com/leone2016/reactCourse/master/img/montaje.PNG)

### CONSTRUCTOS(props):
* Se ejecuta antes de montar el componente 
* Inicializar el state del componente
* binding contexto de los metodos
    `this.handleClick = this.handleClick.bind` ó `handleClick = () => { ... }`
* NO SE DEBE LLAMAR AL SETSTATE

### componentWillMount():
* Se ejecuta una vez
* Se invoca antes de montar el componente y antes del render
* todavía no tenemos el componten disponible en el DOM
* Se recomienda usar el constructos en su lugar
* SE PUEDE USAR `setState` y no provoca otro render

```Js
ComponenteNombre extends Component {
    constructor(props){
        console.log('Se ejecuta 1ro');
    }
    ComponenteNombre(){
        console.log('Este es el componentWillMount() ')
        console.log('Se ejecuta 2do');
        console.log('aqui se puede utilizar this.setState({ algo: 'here' } )')
    }
    render(){
        console.log('Se ejecuta 3ro');
    }

}
```

*Fase de actualización:* es la que se ejecuta cada ves

* Por defecto se ejecuta cada vez que recibe props o se actualiza su estado
* Podemos controlar cuando el componente necesita renderizar de nuevo, si no lo hacemos el componente se renderizara de nuevo

*Fase de desmontaje:*

* Elimina cualquier listener que se haya creado
* Y que disponga de métodos que hagan referencia a algún componente que pueda no estar disponible en el dom, ya que de hacerlo la aplicación lanzaría una excepción 
