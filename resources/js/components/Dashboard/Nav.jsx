import React from "react";
import AlertModal from "./AlertModal";
import MessageModal from "./MessageModal";
import UserInfo from "./UserInfo";

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar)
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars" />
                </button> */}
                <ul
                    className="navbar-nav ml-auto">
                    <AlertModal />
                    <MessageModal />
                    <div
                        className="topbar-divider d-none d-sm-block" />
                    <UserInfo />
                </ul>
            </nav>
        </>
    )
}

export default Nav;
