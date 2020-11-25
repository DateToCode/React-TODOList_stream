import PropTypes from "prop-types";
import Button from "../Button";

const ToDoItem = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <div>
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
