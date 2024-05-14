function TodoInput({milk,date}){
  return (
      <div className="row">
        <div className="col-4">{milk}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
  );
}
export default TodoInput;