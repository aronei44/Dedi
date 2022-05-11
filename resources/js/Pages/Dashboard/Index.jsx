import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import axios from "axios";
import { isNumber } from "lodash";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";

const Index = () => {
    const {user, role} = usePage().props
    const [arr, setArr] = useState([]);
    const [time, setTime] = useState(0);
    const [data, setData] = useState('');
    const [otp, setOtp] = useState({
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: ""
    });
    useEffect(() => {
        let temp = ''
        for(let num in otp){
            if(otp[num] !== ''){
                temp += otp[num]
            }
        }
        setData(temp)
    }, [otp]);
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
    useEffect(() => {
        setTimeout(() => {
            if(time > 0){
                setTime(time => time-1);
            }
        }, 1000);
    }, [time])
    const verif = () => {
        axios.post('/verify-email')
        .then(res => {
            if(res.data.success){
                setTime(30);
            }
        }
        )
    }
    const send = () => {
        axios.post('verify-otp', {otp: data})
        .then(res => {
            alert(res.data.message)
            window.location.reload();
        })
    }
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
                                            <td>
                                                {user.email}
                                                {user.email_verified_at ?
                                                    (<button type="button" className="btn btn-success ms-3 btn-sm">Verified</button>)
                                                    :
                                                    (<button
                                                        type="button"
                                                        className="btn btn-danger ms-3 btn-sm"
                                                        data-bs-toggle="modal"
                                                        onClick={()=>{
                                                            setTime(30)
                                                            verif()
                                                            }}
                                                        data-bs-target="#staticBackdrop">
                                                        Verif Now
                                                    </button>)}
                                            </td>
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
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Email Verification</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Enter Otp</label>
                                <div className="row justify-content-evenly">
                                    {[...Array(6)].map((x, i) =>
                                        <input
                                            type="text"
                                            value={otp[i]}
                                            onChange={(e)=>{
                                                if(!isNaN(e.target.value))
                                                {
                                                    setOtp(otp => ({...otp,[i]:e.target.value}))
                                                } else {
                                                    setOtp(otp => ({...otp,[i]:""}))
                                                }
                                            }}
                                            maxLength={1}
                                            className="form-control col-1" />
                                    )}
                                </div>
                            </div>
                            <p>please check your registered email for otp.</p>
                            <p>didn't get OTP?
                                {time <= 0 ?
                                    (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setTime(30)
                                                verif()
                                                }}
                                            className="ms-3 btn btn-primary btn-sm">
                                            resend
                                        </button>
                                    )
                                    :
                                    (
                                        <span className="ms-3">
                                        you can resend OTP in {time} second
                                        </span>
                                    )
                                }
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" disabled={data.length == 6 ? false : true} onClick={()=>send()}>Verif Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Index
