import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";

const UserInfo = () => {
    const {user, profile} = usePage().props
    return (
        <li
            className="nav-item dropdown no-arrow">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <span
                    className="mr-2 d-none d-lg-inline text-gray-600 small">
                    {profile.name ? profile.name : user.name}
                </span>
                <img
                    className="img-profile rounded-circle"
                    src="/vendor/img/undraw_profile.svg" />
            </a>
            {/* Dropdown - User Information */}
            <div
                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown">
                <Link
                    className="dropdown-item"
                    href="/dashboard/profile">
                    <i
                        className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    Profile
                </Link>
                <Link
                    className="dropdown-item"
                    href="/dashboard/account">
                    <i
                        className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    Account
                </Link>
                {/* <a
                    className="dropdown-item"
                    href="#">
                    <i

                    className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                    Activity Log
                </a> */}
            </div>
        </li>
    )
}

export default UserInfo;
