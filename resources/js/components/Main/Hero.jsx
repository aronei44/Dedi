import React from 'react';

const Hero = () => {
    return (
        <section
            className="bg-white"
            style={{
                minHeight:"100vh"
            }}>
            <div
                className="container">
                <div
                    className="row align-items-center">
                    <div
                        className="col-md-6">
                        <img
                            src="/img/hero.jpg"
                            alt="hero"
                            className="img-fluid" />
                        </div>
                    <div
                        className="col-md-6">
                        <h1
                            className="display-4 text-primary">
                            Desa Digital <br/>
                            Megamendung
                            </h1>
                        <p
                            className="lead text-muted">
                            Akses seluruh fasilitas desa dalam genggaman anda.
                            </p>
                        <a
                            href="#about"
                            className="btn btn-primary btn-lg scroll-to">
                            Ayo Jelajahi
                            </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
