const App = () => {

  const now = new Date();

  let a = 10;
  let b = 20;
  let answer = a + b;

  return (
    <>
      <p>My first react application.</p>
      <div>
        <p>{a} plus {b} is { answer }</p>
        <p>Hello word! it is { now.toString() }</p>
      </div>
      <br />


    </>
  )
}

export default App;