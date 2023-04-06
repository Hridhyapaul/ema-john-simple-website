import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {name, img, price, quantity, id} = product;
    return (
        <div className='review-item'>
                <img src={img} alt="" />
                <div className='review-details'>
                    <p>{name}</p>
                    <p>Price: <span>${price}</span></p>
                    <p>Quantity: {quantity}</p>
                </div>
                <button className='delete-btn' onClick={() => handleRemoveFromCart(id)}>
                    <FontAwesomeIcon className='dlt-icon' icon={faTrashAlt} />
                </button>
        </div>
    );
};

export default ReviewItem;
