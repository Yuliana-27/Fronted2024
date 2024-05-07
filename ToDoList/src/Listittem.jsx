import PropTypes  from "prop-types"
import ShowItemModal from "./ShowItemModal"

const Listittem = ({task, taskList, setTaskList}) => {
  return (
    <>
    <div className="row">
        <div className="col-6">
          <ShowItemModal task={task}/>
          <TaskModal
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
          />
          <input type="checkbox"/>
          <button 
          className="btn btn-link"
          data-bs-target={"#ShowItemModal"+task.id}
          data-bs-toggle="modal"
          >{task.task}</button>
        </div>

        <div className="col-3">
          {task.limit}
        </div>

        <div className="col-3">
          {task.location}
        </div>

      </div>
    </>
  )
}

Listittem.propTypes ={
  setTaskList: PropTypes.func.isRequired,
  taskList: PropTypes.array.isRequired,
  task: PropTypes.object.isRequired,
}

export default Listittem