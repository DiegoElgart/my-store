import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

const LoginPage = () => {
    const customers = useSelector(state => state.customersReducer.customers);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [isLogIn, setIsLogIn] = useState(false);

    const { username, password } = formData;

    const handleChange = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = e => {
        e.preventDefault();
        const user = customers.find(
            customer => customer.username === formData.username
        );
        if (bcrypt.compareSync(password, user.password)) {
            setIsLogIn(true);
            dispatch({ type: "LOGIN" });
            navigate("/customers");
        } else {
            sessionStorage.clear();
            alert("WRONG PASSWORD!");
        }
    };

    return (
        <>
            <section className='heading'>
                <h1>Login</h1>
                <p>Log in to your account</p>

                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='username'
                            value={username}
                            placeholder='Enter your username'
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='password'
                            name='password'
                            value={password}
                            placeholder='Enter a Password'
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='submit'
                            className='btn btn-block'
                            value='Log In'
                        />
                    </div>
                </form>
            </section>
        </>
    );
};

export default LoginPage;
