function Event() {
  const demo = () => {
    console.log("Demo");
  };

  const printEvent = (event) => {
    console.log(event.type);
  };

  const textEvent = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <h1>Event Demo</h1>
      <input type="button" value="Click" onClick={demo} />
      <input type="button" value="Print Event" onClick={printEvent} />
      <br />
      Text1: <input type="text" placeholder="Text1" onChange={textEvent} />
    </>
  );
}

export default Event;
