import React from 'react'
import NavComponent from './components/NavComponent';
import Header from './components/Header';
import Section from './components/Section';


function App(props) {

    const { productDetails } = props;

    return (
        <div>
            <NavComponent />
            <Header />
            <Section productDetails={ productDetails } />
        </div>
    )
}

export default App