import React from "react";
import { Link, Outlet } from "react-router-dom";

const MenuComp = () => {
    return (
        <header className='header'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/customers'>Customers</Link>
                </li>
                <li>
                    <Link to='/purchases'>Purchases</Link>
                </li>
            </ul>
            <br />
            {/* <Outlet /> */}
        </header>
    );
};

export default MenuComp;
