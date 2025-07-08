function TodoItem({ task, date , handleDelete }) {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">{task}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick = {handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
