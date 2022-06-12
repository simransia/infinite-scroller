import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [credentials, setCredentials] = useState({ username: "", password: "" })
    const [error, setError] = useState('');
    let history = useNavigate();
    const token =localStorage.getItem("token");

    useEffect(()=>{
       if(token != null){
         history("/home");
       }
    }, [])

    const user = {
        userName: 'foo',
        password: 'bar'
    }

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (credentials.username == user.userName && credentials.password == user.password) {
            history("/home");
            setError('');
            localStorage.setItem("token", "yxzdhihhosujh")
        } else {
            setError("Details do not match!");
        }
    }

    return (
        <div className='my-5 container'>
            <h3>Login to continue</h3>
            <hr style={{ height: '5px' }} />
            <p className='error'>{error}</p>
            <div className='my-4'>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="username" onChange={onchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="inputPassword" onChange={onchange} />
                </div>
            </div>
            <div className='text-center'>
                <button type="button" className="btn " onClick={handleClick}>Login</button>
            </div>
        </div>
    )
}

export default Login