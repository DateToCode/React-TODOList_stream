# REQUERIMIENTOS

[CHROME REACT DEVELOPER TOOLS](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es)

# REACTjs

Hay basicamente dos componentes en react:

1. Componente Funcional, tambien conocido como Stateless component.
2. Componente de Clase, tambien conocido como Statefull component.

## Functional Component or Stateless Component:

- Es un funcion de javascript que simplemente devuelve un HTML UI.
- Tambien es llamado "stateless" component porque simplemente acepta los datos y los muestra
  de alguna manera que pueda ser renderizado por UI.
- La funcion acepta propiedades(props) y devuelve html(JSX).
- Nos proprciona una solucion sin usar el state.
- Los componentes funcionales no tiene metodos de renderizado.
- Normalmente se definen usando arrow functions pero puede ser creado tambien como una funcion normal.

```
example:
//with arrow function
import React from “react”;
const Person = (props) => (
    <div>
    <h1>Hello, {props.name}</h1>
    </div>
    );
export default Person;

//without arrow function
import React from “react”;
function Person(props){
return (
    <div>
    <h1>Hello, {props.name}</h1>
    </div>
    )
};

export default Person;
```

## Class Component or Stateful Component

- Es normal en las clases de ES6 que extienden de las clases de la libreria de react.
- Tambien son conocidas como "statefull" component, porque implementan la logica y el estado.
- Debes tener el método render() corriendo en html.
- Tiene una logica UI compleja.
- Pasas las porps al componente de clase con this.props.

## Que es PROPS

Render props es un patrón utilizado en React que consiste en delegar lo que un componente va a renderizar a otro componente, la mayoría de la veces, a un padre en el árbol de componentes.

## Ques es PROP-TYPES

A medida que tu aplicación crece, puedes capturar una gran cantidad de errores con verificación de tipos. Para algunas aplicaciones, puedes usar extensiones de Javascript como Flow o TypeScript para verificar los tipos en tu aplicación. Pero incluso si no usas alguno de ellos, React tiene algunas habilidades de verificación de tipos incorporadas. Para usar verificación de tipos en las props de un componente, puedes asignar la propiedad especial.

PropTypes exporta un rango de validadores que pueden ser usados para estar seguros que la información recibida sea válida. En este ejemplo, usamos PropTypes.string. Cuando un valor inválido se asigna a una prop, se muestra una advertencia en la consola de Javascript. Por razones de desempeño, PropTypes solo se verifica en modo desarrollo.
