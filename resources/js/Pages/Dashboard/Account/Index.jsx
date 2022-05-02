import { usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Layout from "../Layout";

const Index = () => {
    const {user} = usePage().props
    const [email, setEmail] = useState(user.email);
    const [diffEmail, setDiffEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    useEffect(() => {
        if(user.email !== email){
            setDiffEmail(true);
        } else {
            setDiffEmail(false);
        }
    }, [email])

    return (
        <Layout>
            <div className="container-fluid" id="main" style={{maxHeight:"80vh"}}>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Account</h1>
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
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                    <button className="btn btn-primary" disabled={!diffEmail}>Update Email</button>
                                </div>
                                <hr/>
                                <h6 className="m-0 font-weight-bold text-primary">Update Password</h6>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="New Password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />
                                </div>
                                <button className="btn btn-primary">Update Password</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between bg-danger">
                                <h6 className="m-0 font-weight-bold text-white">Danger Zone</h6>
                            </div>
                            <div className="card-body hideScrollbar" style={{
                                height:"50vh",
                                overflow:"auto",
                                }}>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Your Password" />
                                </div>
                                <button className="btn btn-danger">Delete Account</button>
                                <p className="mt-3">
                                    <small>
                                        <strong>
                                            <i className="fas fa-exclamation-triangle"></i>
                                            Warning!
                                        </strong>
                                        <br/>
                                        Deleting your account will delete all your data.
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Index
