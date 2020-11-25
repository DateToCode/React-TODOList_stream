import { useState } from "react";
// export default Input
// export {Input}
// import {Input} from "./componets/Input";

import ToDoItem from "./components/ToDoItem";

const App = () => {
  // let nombre = "Sergio";
  // const [value, setValue] = useState("");

  // let handleButtonClick = (e) => {
  //   alert(`El boton se ha pulsado ${nombre}`);
  // };

  // let handleInputChange = (e) => {
  //   setValue(e.target.value);
  // };

  const handleCompleteItem = (id) => {
    setItems(
      [...items].map((item) =>
        item.id === id ? { ...item, completed: true } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems([...items].filter((item) => item.id !== id));
  };

  const [items, setItems] = useState([
    { id: "0", title: "Hacer la comida", completed: false },
    { id: "1", title: "Cenar", completed: false },
  ]);

  return (
    <div>
      {items.map((item) => (
        <ToDoItem
          key={item.id}
          {...item}
          handleCompleteItem={handleCompleteItem}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </div>
  );
};

export default App;
