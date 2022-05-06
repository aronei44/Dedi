import React, {useEffect, useState} from "react";
import {Head, Link} from "@inertiajs/inertia-react";
import axios from "axios";
import NonAuth from "../../hooks/NonAuth";
import { Inertia } from "@inertiajs/inertia";

const Index = () => {
    NonAuth();
    const [login, setLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const auth = () =>{
        const body = {
            email,
            password,
            name: username
        }
        if(login){
            Inertia.post('/auth/login', body)
        }else{
            Inertia.post('/auth/register', body)
        }
    }
    return (
        <>
            <Head title={`Megamendung - ${ login ? "Login" : "Register"}`} />
            <div
                className="mainCover">
                <div
                    className="card"
                    style={{
                        width:"80%",
                        overflow:"hidden",
                    }}>
                    <div
                        className="card-body px-0 py-0">
                        <div
                            className={`row  ${ login ? "flex-row-reverse ps-4" : "pe-4"}`}>
                            <div
                                className="col-md-6"
                                style={{
                                    backgroundImage: "url('/img/login.jpg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}>
                            </div>
                            <div
                                className="col-md-6 px-4 py-4">
                                <h1
                                    className="card-title text-center">
                                    { login ? "Masuk" : "Daftar"}
                                    </h1>
                                <hr
                                    className="mb-2 mb-4 text-primary" />
                                    { login ? "" : (
                                        <div
                                            className="form-group">
                                            <label
                                                htmlFor="username">
                                                username
                                                </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                placeholder="Username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                />
                                        </div>

                                    )}
                                <div
                                    className="form-group">
                                    <label
                                        htmlFor="email">
                                        Email
                                        </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        />
                                </div>
                                <div
                                    className="form-group">
                                    <label
                                        htmlFor="password">
                                        Password
                                        </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        />
                                </div>
                                <div
                                    className="text-center mt-5 mb-3 ">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => auth()}
                                        style={{
                                            width:"100%"
                                        }}>
                                        { login ? "Masuk" : "Daftar"}
                                        </button>
                                    <p>
                                        { login ? "Belum" : "Sudah"} Punya Akun ? <a
                                            href="#"
                                            onClick={() => setLogin(!login)}
                                            className="text-primary"
                                            style={{
                                                textDecoration:"none"
                                            }}>
                                            { login ? "Daftar" : "Masuk"}
                                            </a>
                                        </p>
                                </div>
                                <div
                                    className="text-center">
                                    <a
                                        href="/auth/google"
                                        className="btn btn-outline-primary"
                                        style={{
                                            width:"100%"
                                        }}>
                                        <img
                                            width="15px"
                                            style={{
                                                marginBottom: '3px',
                                                marginRight: '5px'
                                            }}
                                            alt="Google login"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                                            Sign in with Google
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;
