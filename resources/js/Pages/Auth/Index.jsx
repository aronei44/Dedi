import React, {useState} from "react";
import {Head} from "@inertiajs/inertia-react";

const Index = () => {
    const [login, setLogin] = useState(true)
    const [isLogin, setIsLogin] = useState(false);
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
                                    backgroundImage: "url('https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')",
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
                                        />
                                </div>
                                <div
                                    className="text-center my-5 ">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;
