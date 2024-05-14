function TodoGame() {
  return (
    <center class="cntr-container cntr-row">
      <div class="row inpt-row">
        <div class="col-4">
          <input type="text" placeholder="Enter todo here" required />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </center>
  );
}
export default TodoGame;
