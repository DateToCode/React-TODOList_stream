import PropTypes from "prop-types";
import Button from "../Button";

import "./index.css";

const ToDoItem = (props) => {
  return (
    <div className={["todoItem", props.completed ? "completed" : ""].join(" ")}>
      {/* FORMA 2 <div className={["todoItem", props.completed ? "todoItem-completed" : ""].join(" ")}> */}
      {/* FORMA 3 <div className={props.completed ? "todoItem-completed" : "todoItem"}> */}
      <h4>{props.title}</h4>
      <div className="todoItem__actions">
        {/* Complete button */}
        {!props.completed && (
          <Button
            label="Completar"
            classes={["success"]}
            onClick={() => props.handleCompleteItem(props.id)}
          />
        )}
        {/* Delete button */}
        <Button
          label="Eliminar"
          classes={["danger"]}
          onClick={() => props.handleDeleteItem(props.id)}
        />
      </div>
    </div>
  );
};

ToDoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  handleCompleteItem: PropTypes.func,
  handleDeleteItem: PropTypes.func,
};

export default ToDoItem;
