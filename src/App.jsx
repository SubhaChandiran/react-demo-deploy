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
// ========================
// function Card(props) {
//   return (
//     <div>
//       <h3>{props.title}</h3>
//       <h4>{props.price}</h4>
//       <h5>{ props.plan}</h5>
//     </div>
//   )
// }

const Card = ({ title, price, plan }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
      <ul>
        {plan.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};




const App = () => {
  const cardsData = [
    {
      title: 'FREE',
      price: '$0/month',
      plan: [
        'Single User', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'
      ]
    },
    {
      title: 'PLUS',
      price: '$9/month',
      plan: [
        '5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'
      ]
    },
    {
      title: 'PRO',
      price: '$49/month',
      plan: [
        'Unlimited Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'
      ],
    },
  ]
  return (
    <>
        <div className='card-container'>
          <ul>
            <li className='card-container'>
                  {cardsData.map((card, index) => (
                  <div key={index} className='card'>
                  <Card
                  key={index}
                  title={card.title}
                  price={card.price}
                  plan={card.plan}
                  />
                </div>
                ))}
            </li>
          </ul>
        </div>
    </>
  )
}

export default App;