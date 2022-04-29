import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import {usePage} from "@inertiajs/inertia-react";

const Nav = () => {
    const {user} = usePage().props
    const [scrolled, setScrolled] = useState(false);
    const logout = () => {
        Inertia.post("/auth/logout");
        Inertia.post("/auth/logout");
    };
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });
    }, []);
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-light bg-light ${scrolled ? "fixed-top" : "bg-opacity-25"}`}>
            <div
                className="container">
                <Link
                    className="navbar-brand"
                    href="/">
                    Megamendung
                    </Link>
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
                        {user ? (
                            <>
                                <li
                                    className="nav-item">
                                    <Link
                                        className="nav-link"
                                        href="#">
                                        Dashboard
                                        </Link>
                                    </li>
                                <li
                                    className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        {user.name}
                                        </Link>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                onClick={() => logout()}
                                                href="#">
                                                Logout
                                                </Link>
                                            </li>
                                    </ul>
                                </li>
                            </>
                        ) : (
                            <li
                                className="nav-item">
                                <Link
                                    className="nav-link text-white btn btn-primary btn-sm"
                                    href="/auth">
                                    Login
                                    </Link>
                                </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;
