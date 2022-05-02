import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Sidebar = () => {
    return (
        <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
            style={{
                maxHeight: "100vh",
            }}>
            <Link
                className="sidebar-brand"
                href="/">
                <div
                    className="sidebar-brand-text">
                    Megamendung
                </div>
            </Link>
            <hr
                className="sidebar-divider my-0" />
            <li
                className="nav-item active">
                <Link
                    className="nav-link"
                    href="/dashboard">
                    <i
                        className="fas fa-fw fa-tachometer-alt" />
                    <span>
                        Dashboard
                    </span>
                </Link>
            </li>
            <hr
                className="sidebar-divider" />
            <div
                className="sidebar-heading">
                Account
            </div>
            <li
                className="nav-item">
                <a
                    className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#accountSetting"
                    aria-expanded="true"
                    aria-controls="accountSetting">
                    <i
                        className="fas fa-fw fa-cog" />
                    <span>
                        Setting
                    </span>
                </a>
                <div
                    id="accountSetting"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionSidebar">
                    <div
                        className="bg-white py-2 collapse-inner rounded">
                        {/* <h6
                            className="collapse-header">Custom Components:</h6> */}
                        <Link
                            className="collapse-item"
                            href="/dashboard/account">
                            <i
                                className="fas fa-fw fa-user" />
                            <span
                                className="ms-1">
                                Account
                            </span>
                        </Link>
                        <Link
                            className="collapse-item"
                            href="/dashboard/profile">
                            <i
                                className="fas fa-fw fa-user" />
                            <span
                                className="ms-1">
                                Profile
                            </span>
                        </Link>
                    </div>
                </div>
            </li>
            <li
                className="nav-item bg-danger">
                <a
                    className="nav-link"
                    href="#"
                    onClick={()=>Inertia.post('/auth/logout')}>
                    <i
                        className="fas fa-fw fa-sign-out-alt" />
                    <span>
                        Logout
                    </span>
                </a>
            </li>
        </ul>
    )
}
export default Sidebar;
