import React from "react";

const CarouselCard = ({data}) => {
    let minus = 5 - data.rating;
    let star = [];
    for (let i = 0; i < data.rating; i++) {
        star.push(1);
    }
    for (let i = 0; i < minus; i++) {
        star.push(0);
    }
    return (
        <div
            className="card mb-3 mx-auto"
            style={{
                maxWidth: '540px',
                border:'none'
            }}>
            <div
                className="row g-0 align-items-center">
                <div
                    className="col-md-4">
                    <img
                        src={data.image}
                        className="img-fluid rounded"
                        alt={data.name} />
                </div>
                <div
                    className="col-md-8">
                    <div
                        className="card-body">
                        <h5
                            className="card-title">
                            {data.name}
                        </h5>
                        <p>
                            {star.map((item, index) => {
                                return (
                                    <span
                                        className={`fa fa-star ${item === 1 ? 'checked' : ''}`}
                                        key={index}
                                        />
                                    )
                                }
                            )}
                            <span
                                className="ms-2">
                                {data.rating}/5
                            </span>
                        </p>
                        <p
                            className="card-text">
                            {data.content}
                        </p>
                        <p
                            className="card-text">
                            <small
                                className="text-muted">
                                {data.created_at}
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselCard;
