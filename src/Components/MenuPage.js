import React from "react";
import { Link } from "react-router-dom";

const MenuPage = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                width: "600px",
            }}>
            <div className='menuOptions'>
                <Link to='/products'>Products</Link>
            </div>
            <div className='menuOptions'>Customers</div>
            <div className='menuOptions'>Purchases</div>
        </div>
    );
};

export default MenuPage;
