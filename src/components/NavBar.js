import React from "react";
import Wrapper from '../assets/wrappers/Navbar'
import { FaHome, FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Logo from "./Logo";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearStore, logoutUser, toggleSidebar } from "../features/user/userSlice";

const NavBar = () => {
    const [showLogout, setShowLogout] = useState(false)
    const { user } = useSelector((store) => store.user)
    const dispatch = useDispatch()

    const toggle = () => {
        dispatch(toggleSidebar())
    }

    return <Wrapper>
        <div className="nav-center">
            <button type='button' className="toggle-btn" onClick={()=>toggle()}>
                <FaAlignLeft/>
            </button>
            <div>
                <Logo />
                <h3 className="logo text">dashboard</h3>
            </div>
            <div className="btn-container">
                <button type="button" className="btn" onClick={()=>setShowLogout(!showLogout)}>
                    <FaUserCircle />
                    {user? user.name: null}
                    <FaCaretDown />
                </button>
                {showLogout &&
                    <div className="dropdown show-dropdown">
                        <button type="button" className="dropdown-btn" onClick={() => {
                            setShowLogout(false)
                            dispatch(clearStore('Logout Successful'))
                        }}>
                            logout
                        </button>
                    </div>
                }
            </div>
        </div>
    </Wrapper>
}

export default NavBar