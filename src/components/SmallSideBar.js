import React from "react";
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from "react-icons/fa";
import Logo from './Logo'
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import NavLinks from "./NavLinks";


const SmallSideBar = () => {
    const { isSideBarOpen } = useSelector((store) => store.user)
    const dispatch = useDispatch()

    const toggle = () => {
        dispatch(toggleSidebar)
    }

    return <Wrapper>
        <div className={isSideBarOpen ? "sidebar-container show-sidebar" : "sidebar-container"} >
            <div className="content">
                <button className="close-btn" onClick={() => toggle()}>
                <FaTimes />
                </button>
                <header>
                    <Logo />
                </header>
                <NavLinks toggle={toggle}/>
            </div>
        </div>
    </Wrapper>
}

export default SmallSideBar