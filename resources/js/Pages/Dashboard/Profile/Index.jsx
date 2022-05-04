import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Layout from "../Layout";

const Index = () => {
    const {user, profile} = usePage().props
    const [hidden, setHidden] = useState({
        name : true,
        status : true,
        work : true,
        gender : true
    });
    const [data, setData] = useState({
        name: profile.name,
        gender: profile.gender,
        status: profile.status,
        work: profile.work
    });
    const updateProfile = () => {
        Inertia.put('/profile',data);
        window.location.reload();
    }
    return (
        <Layout>
            <div
                className="container-fluid"
                id="main"
                style={{
                    maxHeight:"80vh"
                }}>
                <div
                    className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1
                        className="h3 mb-0 text-gray-800">
                        Profile
                    </h1>
                </div>
                <div
                    className="row">
                    <div
                        className="col-xl-8 col-lg-7">
                        <div
                            className="card shadow mb-4">
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6
                                    className="m-0 font-weight-bold text-primary">
                                    Profile Info
                                </h6>
                            </div>
                            <div
                                className="card-body hideScrollbar"
                                style={{
                                    minHeight:"50vh",
                                    overflow:"auto",
                                }}>
                                <table
                                    className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <th
                                                scope="row">
                                                Nama
                                            </th>
                                            <td>
                                                <p
                                                    className="pointer"
                                                    onClick={()=>setHidden({...hidden, name:false})}
                                                    hidden={!hidden.name}>
                                                    {data.name || "Input your name"}
                                                </p>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.name}
                                                    hidden={hidden.name}
                                                    onChange={(e)=>setData({...data, name:e.target.value})}
                                                    placeholder="Input your name" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th
                                                scope="row">
                                                Jenis Kelamin
                                            </th>
                                            <td>
                                                <p
                                                    className="pointer"
                                                    onClick={()=>setHidden({...hidden, gender:false})}
                                                    hidden={!hidden.gender}>
                                                    {data.gender ? (data.gender === 'l' ? "Laki laki" : "Perempuan") : "Pilih Jenis Kelamin Anda"}
                                                </p>

                                                <select
                                                    className="form-control"
                                                    onChange={(e)=>setData({...data,gender:e.target.value})}
                                                    hidden={hidden.gender} >
                                                    <option
                                                        hidden>
                                                        Pilih Jenis Kelamin Anda
                                                    </option>
                                                    <option
                                                        value="l"
                                                        selected={data.gender === "l"}>
                                                        Laki Laki
                                                    </option>
                                                    <option
                                                        value="p"
                                                        selected={data.gender === "p"}>
                                                        Perempuan
                                                    </option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th
                                                scope="row">
                                                Status
                                            </th>
                                            <td>
                                                <p
                                                    className="pointer"
                                                    onClick={()=>setHidden({...hidden, status:false})}
                                                    hidden={!hidden.status}>
                                                    {data.status || "Pilih Status Anda"}
                                                </p>

                                                <select
                                                    className="form-control"
                                                    onChange={(e)=>setData({...data,status:e.target.value})}
                                                    hidden={hidden.status} >
                                                    <option
                                                        hidden>
                                                        Pilih Status Anda
                                                    </option>
                                                    <option
                                                        value="Belum Menikah"
                                                        selected={data.status === "Belum Menikah"}>
                                                        Belum Menikah
                                                    </option>
                                                    <option
                                                        value="Menikah"
                                                        selected={data.status === "Menikah"}>
                                                        Menikah
                                                    </option>
                                                    <option
                                                        value="Bercerai"
                                                        selected={data.status === "Bercerai"}>
                                                        Bercerai
                                                    </option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th
                                                scope="row">
                                                Pekerjaan
                                            </th>
                                            <td>
                                                <p
                                                    className="pointer"
                                                    onClick={()=>setHidden({...hidden, work:false})}
                                                    hidden={!hidden.work}>
                                                    {data.work || "Isi Pekerjaan Anda"}
                                                </p>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.work}
                                                    hidden={hidden.work}
                                                    onChange={(e)=>setData({...data,work:e.target.value})}
                                                    placeholder="Isi Pekerjaan Anda" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button
                                    className="btn btn-primary"
                                    onClick={updateProfile}
                                    type="button"
                                    >
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-4 col-lg-5">
                        <div
                            className="card shadow mb-4">
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between bg-primary">
                                <h6
                                    className="m-0 font-weight-bold text-white">Profile Photo</h6>
                            </div>
                            <div
                                className="card-body hideScrollbar" style={{
                                height:"50vh",
                                overflow:"auto",
                                }}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Index
