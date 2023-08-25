import React from "react"
import { useState, useEffect} from 'react'
import { Logo,FormRow } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { toast } from "react-toastify"

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true
}

const Register = () => {
    const [values, setValues] = useState(initialState)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const { name, email, password, isMember } = values
        if (!email || !password || (!isMember && !name)) {
            toast.error('please fill out all fields')
            return
        }

        if (isMember) {
            //login
        }
        else {
            //register
        }
    }

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

    return <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
            <Logo />
            <h3> { values.isMember ? 'Login' : 'Register'}</h3>
            {!values.isMember && (
                <FormRow name='name' type='name' value={values.name} handleChange={handleChange} labelText='name' />
            )}
            <FormRow name='email' type='email' value={values.email} handleChange={handleChange} labelText='email' />
            <FormRow name='password' type='password' value={values.password} handleChange={handleChange} labelText='password' /> 
            <button type="submit" className="btn btn-block">
                { values.isMember ? 'Login' : 'Register'}
            </button>
            <p>
                {values.isMember ? ('Not a member?') : 'Already a member'}
                 <button type="button" className="member-btn" onClick={toggleMember}>
                { !values.isMember ? 'Login' : 'Register'}
            </button>
            </p>

       </form>
    </Wrapper>
}

export default Register