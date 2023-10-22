import './App.css'
import React from 'react';

function Card({ title, price, plan, titleClassName, priceClassName, planClassName }) {
  return (
    <div className='Card'>
      <div className={titleClassName}>{title}</div>
      <div className={priceClassName}>{price}</div>
      <div className={planClassName}>
        <ul>
          {plan.map((item, index) => (
            <li
              key={index} className={item.disabled ? 'disabled' : ''}>
              <i className="fa fa-solid fa-check"></i>
              {item.disabled ? <span className='disable-points'>{item.text}</span> : item.text}
            </li>
          ))}
          <button className='button'>BUTTON</button>
        </ul>
      </div>
    </div>
  );
}


const cardsData = [
  {
    title: 'FREE',
    price: '$0/month',
    plan: [
      { text: 'Single User', disabled: false },
      { text: '50GB Storage', disabled: false },
      { text: 'Unlimited Public Projects', disabled: false },
      { text: 'Community Access', disabled: false },
      { text: 'Unlimited Private Projects', disabled: true },
      { text: 'Dedicated Phone Support', disabled: true },
      { text: 'Free Subdomain', disabled: true },
      { text: 'Monthly Status Reports', disabled: true },
    ]
  },
  {
    title: 'PLUS',
    price: '$9/month',
    plan: [
      { text: '5 Users', disabled: false },
      { text: '50GB Storage', disabled: false },
      { text: 'Unlimited Public Projects', disabled: false },
      { text: 'Community Access', disabled: false },
      { text: 'Unlimited Private Projects', disabled: false },
      { text: 'Dedicated Phone Support', disabled: false },
      { text: 'Free Subdomain', disabled: false },
      { text: 'Monthly Status Reports', disabled: true },
    ]
  },
  {
    title: 'PRO',
    price: '$49/month',
    plan: [
      { text: 'Unlimited Users', disabled: false },
      { text: '50GB Storage', disabled: false },
      { text: 'Unlimited Public Projects', disabled: false },
      { text: 'Community Access', disabled: false },
      { text: 'Unlimited Private Projects', disabled: false },
      { text: 'Dedicated Phone Support', disabled: false },
      { text: 'Free Subdomain', disabled: false },
      { text: 'Monthly Status Reports', disabled: false },
    ]
  },
];

const App = () => {
  return (
    <>
      <h1 className='heading'>React Price Card</h1>
      <p className='firstPara'>
        Reproduce this user interface using a React.js application with JSX.
        Write the code <br /> in a dynamic manner.
      </p>
      <div className='container'>
        <ul>
          <li>
            {cardsData.map((card, index) => (
              <div key={index} className=''>
                <Card
                  key={index}
                  title={card.title}
                  price={card.price}
                  plan={card.plan}
                  titleClassName="CardHeading"
                  priceClassName="Cardprice"
                  planClassName="CardList"
                  buttonDisabled={index < 2}
                />
              </div>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
};

export default App;