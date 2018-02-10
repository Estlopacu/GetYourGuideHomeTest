import React, {PropTypes} from 'react';

const Card = ({card, children}) => {
    return (
        <div className="card p-4 mb-2">
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                {card.isSpecialOffer && <h5 className="card-title text-right"><span className="badge">Special Offer</span></h5>}
                <p className="card-text">
                    {children}
                    <span className="float-right card--price">{card.currency}{card.price}</span>
                </p>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
    children: PropTypes.element
};
export default Card;