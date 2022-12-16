import React from "react";
import { useSelector } from "react-redux";
import ProductComp from "./ProductComp";
const ProductsPage = () => {
    const products = useSelector(state => state.productsReducer.products);

    return (
        <div className='regions'>
            <div className='region'>
                <h1>Here will be amount of purchased items</h1>
            </div>
            <div className='region'>
                {products &&
                    products.map(product => (
                        <ProductComp key={product.id} product={product} />
                    ))}
            </div>
        </div>
    );
};

export default ProductsPage;
