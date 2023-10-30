import React from 'react';
import Product from './Product';

function Section(props) {
    const { productDetails } = props;
    return (
        <div>
            <section>
                <div>
                    <div>
                        {productDetails.map((product) => {
                            return <Product product={product} key={product.product} />;
                        })}
                    </div>
                </div>
            </section>
        </div>
  );
}

export default Section