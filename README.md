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


# *Fase de montaje:*

* es la primera en ejecutarse y siempre se ejecuta y solo una lo hace vez
* construye al componente con su estado inicial
* Obtiene las props que se le han pasado
* Binding (enlazamos) métodos de clase
* En el montaje se ejecuta por primera vez el render(), al terminar la ejecución ya se podrá visualizar en el DOM

![ciclo montaje](https://raw.githubusercontent.com/leone2016/reactCourse/master/img/montaje.PNG)

## constructor(props):
* Se ejecuta antes de montar el componente 
* Inicializar el state del componente
* binding contexto de los metodos
    `this.handleClick = this.handleClick.bind` ó `handleClick = () => { ... }`
* NO SE DEBE LLAMAR AL SETSTATE

## componentWillMount():
* Se ejecuta una vez
* Se invoca antes de montar el componente y antes del render
* todavía no tenemos el componten disponible en el DOM
* Se recomienda usar el *constructor* en su lugar
* SE PUEDE USAR `setState` y no provoca otro render

```Js
class ComponenteNombre extends Component {
        constructor(props){
            console.log('Se ejecuta 1ro');
            this.state = { nombre: 'hola' }
        }
        ComponenteNombre(){
            console.log('Este es el componentWillMount() ')
            console.log('Se ejecuta 2do');
            console.log('aqui se puede utilizar this.setState({ nombre: 'leo' } )');

            this.setState({ nombre: 'Leonardo Medina' });
        }
        render(){
            console.log('Se ejecuta 3ro');
        }

}
```

## render():
* El único método obligatorio en nuestro componente
* Retorna los elementos que queremos mostrar en la interfaz
* No se debe llama a `setState`, provocaría un loop infinito
* es la primera en ejecutarse, ya que tambien se ejecita en el ciclo de actualización de nuestro componente.
* este metodo debe ser siempre puro, donde no debe modificar el DOM o el state, no se recomienda realizar transformaciones aqui
    * renderizado condicional
    * números
    * renderizado de fragmentos: no es necesario envolver en un `<div>`
    ```Js
    render(){
        return [
            <h1 key='a'> primer elementp </h1>
            <HelloRender key='b'> primer elementp </HelloRender>
            <HelloRender key='b'> primer elementp </HelloRender>
            <h2 key='b'> primer elementp </h2>
        ]
    }
    ```
## componentDidMount()
* Se ejecuta tras renderizar el componente
* ya tendremos una representación en el DOM
* Aquí podemos añadir las llamadas para recuperar datos del servidor y escuchar eventos
* se puede utilizar  <span style="color:green">*setState*</span>. luego de ejecutarlo se realiza otra llamada al render()



*Fase de actualización:* es la que se ejecuta cada ves

* Por defecto se ejecuta cada vez que recibe props o se actualiza su estado
* Podemos controlar cuando el componente necesita renderizar de nuevo, si no lo hacemos el componente se renderizara de nuevo

> decimos que react es reactivo y declarativo, esto quiere decir que reacciona a los cambios  del state de un componente ó cada vez que le llegan *props* nuevos y le decimos que debe renderizar y no como debe hacerlo, esto se vuelve realidad gracias al ciclo de actualización que estará constantemente en ejecucion desde que se monto en nuestro componente y hasta que se desmonte, en este ciclo a mas de actualizar lo que nuestro componente ha renderizado tambien se puede indicar si este es necesario

![ciclo actializacion](https://raw.githubusercontent.com/leone2016/reactCourse/master/img/actualizacion.PNG)

## componentWillReceiveProps(nestProps)

> el primer elemento que se PUEDE ejecutar en el ciclo de actalización,  este metodo solo se ejecuta si el ciclo de actialización a sido provocado porque el componente a recibido nuevas props y no cuando el state a cambiado
* Se ejecuta sólo cuando el compoente va a recibir nuevas props
* útil cuando se usa las props para formar el state del componente
* <span style="color:green">Se puede usar setState</span> y a veces no provoca otro render.
*Fase de desmontaje:*

* Elimina cualquier listener que se haya creado
* Y que disponga de métodos que hagan referencia a algún componente que pueda no estar disponible en el dom, ya que de hacerlo la aplicación lanzaría una excepción 
