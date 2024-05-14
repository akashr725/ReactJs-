function TodoGame() {
  return (
    <center className="cntr-container cntr-row">
      <div className="row inpt-row">
        <div className="col-4">
          <input type="text" placeholder="Enter todo here" required />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </center>
  );
}
export default TodoGame;
