import React from 'react';
import './Movie.css';

const MovieTemplate: React.FC<{ title: string, url: string, children: React.ReactNode }> = ({ title, url, children }) => {
    return (
        <div className="col mb-4">
            <div className="card h-100">
                <img src={url} className="card-img-top imgSizing" alt={title} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title align-self-center">{title}</h5>
                    <div className="mt-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieTemplate;
