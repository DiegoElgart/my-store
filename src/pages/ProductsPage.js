import React from "react";
import { useSelector } from "react-redux";
import ProductComp from "../Components/ProductComp";
const ProductsPage = () => {
    const products = useSelector(state => state.productsReducer.products);
    const purchases = useSelector(state => state.purchasesReducer.purchases);

    return (
        <div className='container' style={{ display: "flex" }}>
            <div className='card' style={{ height: "150px" }}>
                <h1>There are {purchases.length} in the cart</h1>
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
