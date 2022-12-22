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
            <div className='menuOptions'>
                <Link to='/customers'>Customers</Link>
            </div>
            <div className='menuOptions'>
                <Link to='/purchases'>Purchases</Link>
            </div>
            <br />
            <Outlet />
        </div>
    );
};

export default MenuPage;
