import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const MenuComp = ({ isAuthenticated }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };
    return (
        <div className='container'>
            <header className='header'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    {!isAuthenticated ? (
                        <>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/register'>Register</Link>
                            </li>
                        </>
                    ) : null}
                    {isAuthenticated ? (
                        <>
                            <li>
                                <Link to='/products'>Products</Link>
                            </li>
                            <li>
                                <Link to='/customers'>Customers</Link>
                            </li>
                            <li>
                                <Link to='/purchases'>Purchases</Link>
                            </li>

                            <li className='btn' onClick={logout}>
                                Logout
                            </li>
                        </>
                    ) : null}
                </ul>
                <br />
            </header>
        </div>
    );
};

export default MenuComp;
