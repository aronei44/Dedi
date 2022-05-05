import React from "react";
import CarouselCard from "./CarouselCard";

const Carousel = () => {
    const data = [
        {
            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            name: "Pendidikan",
            content: "Pendidikan adalah fasilitas yang dapat digunakan oleh para pengunjung atau warga setempat untuk mengakses informasi tentang pendidikan yang ada di desa. Pendidikan dapat menjadi media informasi yang bermanfaat bagi para pengunjung.",
            created_at: "2020-05-01",
            rating: "4"
        },
        {
            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            name: "UMKM",
            content: "UMKM adalah fasilitas yang dapat digunakan oleh para pengunjung atau warga setempat untuk mengakses informasi tentang UMKM yang ada di desa. UMKM dapat menjadi media informasi yang bermanfaat bagi para pengunjung.",
            created_at: "2020-05-01",
            rating: "3"
        },
    ]
    return (
        <section
            className="bg-white"
            style={{
                minHeight:"60vh"
            }}>
            <div
                className="container">
                <h2
                    className="text-primary text-center">
                    Kata Mereka
                </h2>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel">
                    <div
                        className="carousel-inner">
                        {data.map((item, index) => {
                            return (
                                <div
                                    className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <CarouselCard
                                        data={item}
                                        key={index}
                                        />
                                </div>
                            )}
                        )}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true" />
                        <span
                            className="visually-hidden">
                            Previous
                        </span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true" />
                        <span
                            className="visually-hidden">
                            Next
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Carousel;
