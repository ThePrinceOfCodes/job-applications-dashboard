import React from "react";
import Wrapper from '../assets/wrappers/Navbar'
import { FaHome, FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Logo from "./Logo";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
    const { user } = useSelector((store) => store.user)
    const dispatch = useDispatch()

    return <Wrapper>
        <div className="nav-center">
            <button type='button' className="toggle-btn" onClick={console.log('toggle side abr')}>
                <FaAlignLeft/>
            </button>
            <div>
                <Logo />
                <h3 className="logo text">dashboard</h3>
            </div>
            <div className="btn-container">
                <button type="button" className="btn" onClick={console.log('clicked')}>
                    <FaUserCircle />
                    {user? user.name: null}
                    <FaCaretDown />
                </button>
                <div className="dropdown show-dropdown">
                    <button type="button" className="dropdown-btn" onClick={console.log('logout user')}>
                        logout
                    </button>
                </div>
            </div>
        </div>
    </Wrapper>
}

export default NavBar