import React from "react";
import Wrapper from '../assets/wrappers/BigSidebar'
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import { NavLinks } from "../components";

const BigSideBar = () => {
    const { isSideBarOpen } = useSelector((store) => store.user)

    return <Wrapper>
        <div className={isSideBarOpen? 'sidebar-container ' : 'sidebar-container show-sidebar' }>
            <div className="content">
                <header>
                    <Logo />
                </header>
                <NavLinks/>
            </div>
        </div>
    </Wrapper>
}

export default BigSideBar