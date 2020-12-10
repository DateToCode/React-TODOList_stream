import { useState, useEffect } from "react";
import ToDoItem from "../../components/ToDoItem";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./index.css";

const ToDoList = (props) => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("el componente ha sido cargado correctamente");
    const auxItems = JSON.parse(localStorage.getItem("todo-items"));

    if (Array.isArray(auxItems)) {
      console.log("es un array");
      setItems(auxItems);
    } else {
      console.log("no es un array");
    }
  }, []);

  //   START HANDLERS

  const handleInput = (ev) => {
    setValue(ev.target.value);
  };

  const handleAddItem = () => {
    const auxItems = [...items];

    const newItem = {
      id: new Date().getTime().toString(),
      title: value,
      completed: false,
    };

    auxItems.push(newItem);

    setValue("");
    setItems(auxItems);
    localStorage.setItem("todo-items", JSON.stringify(auxItems));
  };

  const handleCompleteItem = (id) => {
    const auxItems = [...items].map((item) =>
      item.id === id ? { ...item, completed: true } : item
    );
    setItems(auxItems);
    localStorage.setItem("todo-items", JSON.stringify(auxItems));
  };

  const handleDeleteItem = (id) => {
    const auxItems = [...items].filter((item) => item.id !== id);
    setItems(auxItems);
    localStorage.setItem("todo-items", JSON.stringify(auxItems));
  };

  //   END HANDLERS

  return (
    <div className="todoList">
      <div className="todoList__form">
        <Input
          type="text"
          value={value}
          onChange={handleInput}
          name="name"
          classes={["fullWidth", "mr-2"]}
        />
        <Button
          type="button"
          onClick={handleAddItem}
          label="Añadir item"
          disabled={value === "" ? true : false}
          classes={["success"]}
        />
      </div>
      <div className="todoList__list">
        {items.map((item) => (
          <ToDoItem
            key={item.id}
            {...item}
            handleCompleteItem={handleCompleteItem}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
