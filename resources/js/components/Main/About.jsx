import React from "react";
import AboutCard from "./AboutCard";


const About = () => {
    return (
        <section
            className="bg-white"
            style={{
                height:"80vh"
            }}>
            <div
                className="container">
                <div
                    id="about"
                    className="row align-items-start">
                    <div
                        className="col-md-6">
                        <h2
                            className="text-primary text-end">
                            Tentang Megamendung Digital
                            </h2>
                        <br />
                        <p
                            className="lead text-muted text-end">
                            Megamendung Digital adalah aplikasi desa digital yang dikembangkan oleh Desa Digital Megamendung. Dengan aplikasi ini, diharapkan para pengunjung atau warga setempat dapat mengakses fasilitas - fasilitas yang tersedia dengan mudah dan cepat. Diharapkan pula aplikasi ini menjadi media informasi yang bermanfaat bagi para pengunjung.
                            </p>
                        <p
                            className="lead text-muted text-end">
                            Sasaran utama aplikasi ini adalah para pengunjung atau wisatawan serta penduduk setempat agar bisa mendapatkan kemudahan dalam mengakses fasilitas desa. Aplikasi ini juga dapat digunakan oleh para petugas desa untuk mengelola fasilitas desa.
                            </p>
                        </div>
                    <div
                        className="col-md-6">
                        <h2 className="text-primary">
                            Fasilitas Tersedia
                            </h2>
                        <br />
                        <div className="row">
                            <AboutCard
                                name="Pendidikan" />
                            <AboutCard
                                name="UMKM" />
                            <AboutCard
                                name="Pariwisata" />
                            <AboutCard
                                name="Hotel Dan Villa" />
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default About;
