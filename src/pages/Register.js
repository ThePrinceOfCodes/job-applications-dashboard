import React from "react"
import { useState, useEffect} from 'react'
import { Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
    name: '',
    email: '',
    password: '',
    ismember: true
}

const Register = () => {
    const [values, setValues] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
    }

    return <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
            <Logo />
            <h3>Login</h3>
            <div className="form-row">
                <label htmlFor="name" className="form-label">
                    name
                </label>
                <input type="text" name="name" value={values.name} className="form-input" onChange={handleChange}/>
            </div>
            <div className="form-row">
                <label htmlFor="email" className="form-label">
                    email
                </label>
                <input type="email" name="email" value={values.email} className="form-input" onChange={handleChange}/>
            </div>
             <div className="form-row">
                <label htmlFor="password" className="form-label">
                    password
                </label>
                <input type="password" name="email"  className="form-input" onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-block">
                submit
            </button>
       </form>
    </Wrapper>
}

export default Register