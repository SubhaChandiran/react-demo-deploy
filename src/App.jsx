import React, { useState } from 'react';
import './App.css';
import Header from './header';
import Section from './Section';
import Footer from './footer';




function NavDisplay({ items }) {
  const [isShopMenuOpen, setShopMenuOpen] = useState(false);

  const toggleShopMenu = () => {
    setShopMenuOpen(!isShopMenuOpen);
  };
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#!">Start Bootstrap</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
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
          <form class="d-flex">
            <button class="btn btn-outline-dark" type="submit">
              <i class="bi-cart-fill me-1"></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
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
        <Header />
        <Section />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App


// import React, { useState } from 'react';
// import './App.css';


// function NavDisplay({ items }) {
//   const [isShopMenuOpen, setShopMenuOpen] = useState(false);

//   const toggleShopMenu = () => {
//     setShopMenuOpen(!isShopMenuOpen);
//   };
//   return (
//     <>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <div className='container px-4 px-lg-5'>
//         <nav>
//           <ul>
//             {items.map((item, index) => {
//               if (item === 'Shop') {
//                 return (
//                   <li key={index} onClick={toggleShopMenu}>
//                     <a href="#">{item.name}</a>
//                     {isShopMenuOpen && (
//                       <ul className='products'>
//                         {item.submenu.map((subitem, subindex) => (
//                           <li key={subindex}>
//                             <a href="#">{subitem.name}</a>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 );
//               }
//               return (
//                 <li key={index}><a href="#">{item.name}</a></li>
//               );
//             })}
//           </ul>
//         </nav>
//         </div>
//         <form class="d-flex">
//             <button class="btn btn-outline-dark" type="submit">
//               <i class="bi-cart-fill me-1"></i>
//               Cart
//               <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
//             </button>
//           </form>
//       </nav>
//     </>
//   );
// }

// function App() {
//   const items = [
//     { name: 'Start Bootstrap', tag: 'tag-1' },
//     { name: 'Home', tag: 'tag-2' },
//     { name: 'About', tag: 'tag-3' },
//     {
//       name: 'Shop',
//       tag: 'tag-4',
//       submenu: [
//         { name: 'All Products', tag: 'tag-5' },
//         { name: 'Popular Items', tag: 'tag-6' },
//         { name: 'New Arrivals', tag: 'tag-7' },
//       ],
//     },
//   ];
//   return (
//     <>
//       <div>
//         <NavDisplay items={items} />
//         <form class="d-flex">
//             <button class="btn btn-outline-dark" type="submit">
//               <i class="bi-cart-fill me-1"></i>
//               Cart
//               <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
//             </button>
//           </form>
//       </div>
//     </>
//   );
// };

// export default App
