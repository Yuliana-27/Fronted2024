import ShowItemModal from "./ShowltemModal"

const Listittem = ({task}) => {
  return (
    <>
    <div className="row">
        <div className="col-5">
          <ShowItemModal task={task}/>
          <button 
            className="btn btn-link"
            data-bs-target={"#showItemModal"+task.id}
            data-bs-toggle="modal"
            >{task.task}
            </button>
        </div>
        <div className="col-2">
          {task.limit}
        </div>

        <div className="col-3">
          {task.location}
        </div>
        <div className="col">
          <input type="checkbox" />
        </div>
      </div>
    </>
  )
}

export default Listittem