import React from 'react'

export default function Restaurant({ restaurant }) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <img src={restaurant.images[0].url} alt="pizza" className="card-img-top mx-auto" />
                <div className="card-body d-flex flex-column">
                    <h5 className='cart-title'>{restaurant.name}</h5>
                    <p className="rest_address">{restaurant.address}</p>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner"
                                style={{ width: `${(restaurant.ratings / 5) * 100}%` }}>
                            </div>
                            <span id='no_of_reviews'>{restaurant.numOfReviews} Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
