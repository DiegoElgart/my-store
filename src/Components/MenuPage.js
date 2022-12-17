import React from "react";
import { Link, Outlet } from "react-router-dom";

const MenuPage = () => {
    return (
        <div className='menu'>
            <div className='menuOptions'>
                <Link to='/'>Home</Link>
            </div>
            <div className='menuOptions'>
                <Link to='/products'>Products</Link>
            </div>
            <div className='menuOptions'>Customers</div>
            <div className='menuOptions'>Purchases</div>
            <br />
            <Outlet />
        </div>
    );
};

export default MenuPage;
