import React from 'react';

const InfoCard = ({img,cardTitle,cardText,bgColor}) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgColor}`}>
            <figure className='pl-6 mt-2'><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title mt-5">{cardTitle}</h2>
                <p>{cardText}</p>
            </div>
        </div>
    );
};

export default InfoCard;