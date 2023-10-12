const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {

  return (
    <>
      <div>
        <h1>Greeting</h1>
      </div>
       <Hello />      
    </>
  )
}

export default App;