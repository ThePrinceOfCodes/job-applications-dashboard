import React from "react"
import img from '../assets/images/not-found.svg'
import Wrapper from "../assets/wrappers/ErrorPage"
import { Link } from "react-router-dom"

const Error = () => {
    return <Wrapper className="full-page">
        <div>
            <img src={img} alt="not found" />
            <h3>404</h3>
            <p>page not found</p>
            <Link to='/'>back home</Link>
        </div>
    </Wrapper>
}

export default Error