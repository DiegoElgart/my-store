import { useState, useEffect } from "react";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        password2: "",
        city: "",
    });

    const { username, password } = formData;

    const handleChange = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = e => {
        e.preventDefault();
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

                    <div class='form-group'>
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
