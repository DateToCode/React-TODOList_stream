// export default Input
import Input from "./components/Input";
// export {Input}
// import {Input} from "./componets/Input";

import Button from "./components/Button";

const App = () => {
  let nombre = "Sergio";

  let handleButtonClick = (e) => {
    alert(`El boton se ha pulsado ${nombre}`);
  };

  return (
    <div>
      <Input placeholder="Hola a todos" type="text" />
      <Button
        type="button"
        label="Pulsame"
        onClick={handleButtonClick}
        classes={["success"]}
      />
      <Button
        type="button"
        label="Pulsame"
        onClick={handleButtonClick}
        classes={["danger"]}
      />
      <Button
        type="button"
        label="Pulsame"
        onClick={handleButtonClick}
        classes={["warning"]}
      />
      <h1>Bienvenidos al nuevo curso de React {nombre}</h1>
    </div>
  );
};

export default App;
