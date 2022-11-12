import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card
    return (
        <div className={`card lg:card-side shadow-xl ${bgClass} md:px-5 p-5 text-white`}>
            <figure><img className='' src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default InfoCard;