import React from "react";

const ProductComp = ({ product }) => {
    return (
        <div className='card'>
            <ul>
                <li>Name: {product.name}</li>
                <li>Price: {product.price}</li>
                <li>Quantity: {product.quantity}</li>
                <br />
                <div>Customer region</div>
            </ul>
        </div>
    );
};

export default ProductComp;
