import { usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";

const Index = () => {
    const {user, role} = usePage().props
    const [arr, setArr] = useState([]);
    useEffect(() => {
        for(let key in role){
            if(key == 'id' || key == 'user_id' || key == 'created_at' || key == 'updated_at'){
                continue;
            }
            if(role[key]){
                setArr(arr => [...arr, key]);
            }
        }
    }, [])
    return (
        <Layout>

            <div className="container-fluid" id="main" style={{maxHeight:"80vh"}}>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Account Info</h6>
                            </div>
                            <div className="card-body hideScrollbar" style={{
                                height:"50vh",
                                overflow:"auto",
                                }}>
                                <table className="table table-hover">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Registered Username</th>
                                            <td>{user.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Registered At</th>
                                            <td>{user.created_at.split("T")[0]}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Registered Email</th>
                                            <td>{user.email}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Registered Handphone</th>
                                            <td>{user.phone ? user.phone :"-"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Sign With OAuth</th>
                                            <td>{user.google_id ? "Yes" : "No"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Account Roles</h6>
                            </div>
                            <div className="card-body hideScrollbar" style={{
                                height:"50vh",
                                overflow:"auto",
                                }}>
                                {arr.map((item, index) => {
                                    return (
                                    <h6 key={index} className="m-0 font-weight-bold text-primary text-uppercase">{item}</h6>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Index
