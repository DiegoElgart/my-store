import { useState } from "react";
import { useDispatch } from "react-redux";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        username: "",
        password: "",
        password2: "",
        city: "",
    });

    const { fname, lname, username, password, password2, city } = formData;

    const handleChange = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const salt = bcrypt.genSaltSync(10);

    const handleSubmit = e => {
        e.preventDefault();
        const hashPassword = bcrypt.hashSync(password, salt);
        if (fname !== "" && lname !== "" && username !== "" && city !== "") {
            if (password === password2) {
                const obj = {
                    first_name: fname,
                    last_name: lname,
                    username: username,
                    password: hashPassword,
                    role: "admin",
                    city: city,
                };
                sessionStorage.token = JSON.stringify(obj);
                dispatch({ type: "CUSTOMERS/NEW", payload: obj });
                dispatch({ type: "LOGIN" });
            } else {
                setFormData(prevState => ({
                    ...prevState,
                    password: "",
                    password2: "",
                }));
                alert("Password Confirmation does not match ");
            }
            navigate("/");
        } else {
            alert("You must fill ALL the fields");
            setFormData(prevState => ({
                ...prevState,
                password: "",
                password2: "",
            }));
        }
    };

    return (
        <div className='container'>
            <section className='heading'>
                <h1>Register</h1>
                <p>Create an account!</p>

                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='fname'
                            value={fname}
                            placeholder='Enter your first name'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='lname'
                            value={lname}
                            placeholder='Enter your last name'
                            onChange={handleChange}
                        />
                    </div>
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
                            type='text'
                            name='city'
                            value={city}
                            placeholder='City where you live...'
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
                            type='password'
                            name='password2'
                            value={password2}
                            placeholder='Confirm Password'
                            onChange={handleChange}
                        />
                    </div>
                    .
                    <div className='form-group'>
                        <input type='submit' className='btn btn-block' />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default RegisterPage;
