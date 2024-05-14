let CtimeDate = () => {
  let time = new Date();

  return (
    <p className="lead">
      This is our current Date and Time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CtimeDate;
