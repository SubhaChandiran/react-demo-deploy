// import './App.css'
// import React from 'react';

import React, { useState } from 'react';
import './App.css';

// function NavDisplay({ items }) {
//   const [isShopMenuOpen, setShopMenuOpen] = useState(false);

//   const toggleShopMenu = () => {
//     setShopMenuOpen(!isShopMenuOpen);
//   };

//   return (
//     <div className="container">
//       <nav>
//         <ul>
//           {items.map((item, index) => {
//             if (item === 'Shop') {
//               return (
//                 <li key={index} onClick={toggleShopMenu}>
//                   {item}
//                   {isShopMenuOpen && (
//                     <ul className="products">
//                       <li>All Products</li>
//                       <li>Popular Items</li>
//                       <li>New Arrivals</li>
//                     </ul>
//                   )}
//                 </li>
//               );
//             }
//             return <li key={index}>{item}</li>;
//           })}
//         </ul>
//       </nav>
//     </div>
//   );
// }

// function App() {
//   const items = ['Start Bootstrap', 'Home', 'About', 'Shop'];
//   return (
//     <div>
//       <NavDisplay items={items}
//       className = "navlist"
//       />
//     </div>
//   );
// }

// export default App;

// ==============================================================

function NavDisplay({ items }) {
  const [isShopMenuOpen, setShopMenuOpen] = useState(false);

  const toggleShopMenu = () => {
    setShopMenuOpen(!isShopMenuOpen);
  };
  return (
    <>
      <div className='container'>
        <nav>
          <ul>
            {items.map((item, index) => {
              if (item === 'Shop') {
                return (
                  <li key={index} onClick={toggleShopMenu}>
                    <a href="#">{item.name}</a>
                    {isShopMenuOpen && (
                      <ul className='products'>
                        {item.submenu.map((subitem, subindex) => (
                          <li key={subindex}>
                            <a href="#">{subitem.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li key={index}><a href="#">{item.name}</a></li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

function App() {
  const items = [
    { name: 'Start Bootstrap', tag: 'tag-1' },
    { name: 'Home', tag: 'tag-2' },
    { name: 'About', tag: 'tag-3' },
    {
      name: 'Shop',
      tag: 'tag-4',
      submenu: [
        { name: 'All Products', tag: 'tag-5' },
        { name: 'Popular Items', tag: 'tag-6' },
        { name: 'New Arrivals', tag: 'tag-7' },
      ],
    },
  ];
  return (
    <>
      <div>
        <NavDisplay items={items} />
        <form class="d-flex">
            <button class="btn btn-outline-dark" type="submit">
              <i class="bi-cart-fill me-1"></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
          </form>
      </div>
    </>
  );
};

export default App
// ============================ Original code ==================================

// function NavDisplay({ items }) {
//   return (
//     <>
//       <div className='container'>
//         <nav>
//           <ul>
//           {items.map((item, index) => (
//           <li key={index}>{ item }</li>
//           ))}
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }

// function App() {
//   const items = ['Start Bootstrap', 'Home', 'About', 'Shop'];
//   return (
//     <>
//       <div>
//         <NavDisplay items={items} />
//       </div>
//     </>
//   );
// };

// export default App