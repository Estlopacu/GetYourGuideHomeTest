import React, {PropTypes} from 'react';

const Card = ({card, children}) => {
    return (
        <div className="card p-4 my-2">
            <div className="card-body">
                <h5 className="card-title">{card.title}{card.isSpecialOffer && <span className="badge float-lg-right">Special Offer</span>}</h5>
                <p className="card-text">
                    {children}
                    <span className="float-sm-right">{card.currency}{card.price}</span>
                </p>
            </div>
        </div>
    );
};

export default Card;