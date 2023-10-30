import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);

        // console.log(this.props);
    }
    render() {
        const { productId } = this.props;
        
        return (
            <div>
                <form className="d-flex">
                    <button
                        className="btn btn-outline-dark"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions"
                        aria-controls="offcanvasWithBothOptions"
                    >
                        <i className="bi-cart-fill me-1">Cart</i>
                        <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </button>
                </form>
            </div>
        );
    }
}

export default Cart;