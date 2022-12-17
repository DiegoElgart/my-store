import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProductComp = ({ product }) => {
    return (
        <div className='card'>
            <ul>
                <li>
                    <Link to={`edit/${product.id}`}>Name: {product.name}</Link>
                </li>
                <li>Price: {product.price}</li>
                <li>Quantity: {product.quantity}</li>
                <br />
                <div>
                    <h5>Customers that bought this</h5>
                    <ul>
                        <li>name of customer</li>
                        <li>purchased date</li>
                    </ul>
                    <br />
                    <button>Add</button>
                </div>
            </ul>
        </div>
    );
};

export default ProductComp;
