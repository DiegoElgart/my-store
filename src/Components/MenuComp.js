import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const MenuComp = () => {
    const currentUser = useSelector(
        state => state.isLoggedInReducer.currentUser
    );
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };
    return (
        <header className='header'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                {!currentUser.isLoggedIn ? (
                    <>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                    </>
                ) : null}
                {currentUser.isLoggedIn ? (
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
    );
};

export default MenuComp;
