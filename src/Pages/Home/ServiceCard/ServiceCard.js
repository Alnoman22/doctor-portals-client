import React from 'react';

const ServiceCard = ({data}) => {
    const {name,descr,img}=data
    return (
        <div className="card  shadow-xl mt-16">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{descr}</p>
            </div>
        </div>
    );
};

export default ServiceCard;