const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, your age is { props.age }</p>
    </div>
  )
}

const App = () => {

  return (
    <>
      <div>
        <h1 style={{ color: 'red', backgroundColor:'yellow'}}>Greeting</h1>
      </div>
       <Hello name='Subhash' age='26'/>      
    </>
  )
}

export default App;