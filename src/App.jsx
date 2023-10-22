import './App.css'
import React from 'react';

const Card = ({ title, price, plan }) => {
  return (
    <div className='Card'>
      <h2 className='CardHeading'>{title}</h2>
      <p className='Cardprice'>{price}</p>
      <ul className='CardList'>
        {plan.map((detail, index) => (
          <li key={index}><i className="fa fa-solid fa-check"></i>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

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



const App = () => {
  
  return (
    <>
      <h1 class="heading">React Price Card</h1>
      <p class="firstPara">
        Reproduce this user interface using a React.js application with JSX.
        Write the code <br/>in a dynamic manner.
      </p>
        <div className='container'>
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



// 2 nd one ======================



// function Card({ title, price, plan, titleClassName, priceClassName, planClassName }) {
//   return (
//     <div className='card'>
//       <div className={titleClassName}>{title}</div>
//       <div className={priceClassName}>{price}</div>
//       <div className={planClassName}>
//         {plan.map((item, index) => (
//           <p key={index}>{item}</p>
//         ))}
//       </div>
//     </div>
//   );
// }



// const cardsData = [
//   {
//     title: 'FREE',
//     price: '$0/month',
//     plan: [
//       'Single User', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'
//     ]
//   },
//   {
//     title: 'PLUS',
//     price: '$9/month',
//     plan: [
//       '5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'
//     ]
//   },
//   {
//     title: 'PRO',
//     price: '$49/month',
//     plan: [
//       'Unlimited Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'
//     ],
//   },
// ];

// const App = () => {
//   return (
//     <>
//       <h1>React Price Card</h1>
//       <p>
//         Reproduce this user interface using a React.js application with JSX.
//         Write the code <br /> in a dynamic manner.
//       </p>
//       <div>
//         <ul>
//           <li>
//             {cardsData.map((card, index) => (
//               <div key={index} className='card'>
//                 <Card
//                   key={index}
//                   title={card.title}
//                   price={card.price}
//                   plan={card.plan}
//                   titleClassName="title-class" // Add class name for title
//                   priceClassName="price-class" // Add class name for price
//                   planClassName="plan-class" // Add class name for plan
//                 />
//               </div>
//             ))}
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default App;