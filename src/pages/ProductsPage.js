import React from "react";
import { useSelector } from "react-redux";
import MenuComp from "../Components/MenuComp";
import ProductComp from "../Components/ProductComp";
const ProductsPage = () => {
    const products = useSelector(state => state.productsReducer.products);
    return (
        <div className='container'>
            <div className='region'>
                <h1>There are X in the cart</h1>
            </div>
            <div className='region'>
                {products.map(product => (
                    <ProductComp key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
