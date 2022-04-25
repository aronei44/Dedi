import axios from "axios";
import React, { useEffect, useState } from "react";

const Nav = () => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const logout = () => {
        axios({
            method: "post",
            url: "/api/logout",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then((res) => {
            console.log(res)
            if (res.status === 200) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                setLogin(false);
                setUser({});
                window.location.reload();
            } else {
                alert("Logout failed");
            }
        }).catch((err) => {
            console.log(err);
        })
    };
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setLogin(true);
            setUser(JSON.parse(localStorage.getItem("user")));
        }
    }, []);
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-light">
            <div
                className="container">
                <a
                    className="navbar-brand"
                    href="/">
                    Megamendung
                    </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span
                        className="navbar-toggler-icon" />
                    </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNav">
                    <ul
                        className="navbar-nav ms-auto">
                        {login ? (
                            <>
                                <li
                                    className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#">
                                        Dashboard
                                        </a>
                                    </li>
                                <li
                                    className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        {user.name}
                                        </a>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                onClick={() => logout()}
                                                href="#">
                                                Logout
                                                </a>
                                            </li>
                                    </ul>
                                </li>
                            </>
                        ) : (
                            <li
                                className="nav-item btn btn-primary btn-sm">
                                <a
                                    className="nav-link text-white"
                                    href="/auth">
                                    Login
                                    </a>
                                </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;
