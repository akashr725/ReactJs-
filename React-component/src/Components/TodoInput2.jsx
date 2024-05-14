function TodoInput2() {
  let milk = "Go to College";
  let date = "4/02/2024";

  return (
    <center class="cntr-container cntr-row">
      <div class="row">
        <div class="col-4">{milk}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </center>
  );
}
export default TodoInput2;