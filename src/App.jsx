import './App.css'

// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>Hello {props.name}, your age is { props.age }</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <>
//       <div>
//         <h1>Greeting</h1>
//       </div>
//        <Hello name='Subhash' age='26'/>      
//     </>
//   )
// }

function Card(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.price}</h4>
      <h5>{ props.plan}</h5>
    </div>
  )
}

const App = () => {
  const cardsData = [
    {
      title: 'FREE',
      price: '$0/month',
      plan: [
        'Single User', '50GB Storage', 'Unlimited Public Projects', 'Community Access'
      ]
    },
    {
      title: 'PLUS',
      price: '$9/month',
      plan: [
        '5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access'
      ]
    },
    {
      title: 'PRO',
      price: '$49/month',
      plan: [
        'Unlimited Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access'
      ]
    }
  ]
  return (
    <>
      <div>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            price={card.price}
            plan={card.plan}
          />
        ))}
      </div>
    </>
  )
}

export default App;