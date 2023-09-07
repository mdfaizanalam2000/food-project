import React, { useEffect } from 'react'
import { UseSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { getMenus } from "../actions/menuAction";
import { getRestaurant } from "../actions/restaurantAction";

export default function Menu(storeId) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { menus, loading, error } = UseSelector((state) => state.menus);

    useEffect(() => {
        dispatch(getMenus(id));
        dispatch(getRestaurant());
    }, [dispatch, id, storeId])

    return (
        <div>
            {loading ? <p>Loading Menus...</p> : error ?
                <p>Error</p> :
                menus && menus.length > 0 ?
                    menus.map((menu) =>
                        <div>
                            <h2>{menu.category}</h2>
                            <hr />
                            {menu.items && menu.items.length > 0 ?
                                <div className='row'>
                                    {menu.items.map((fooditem) =>
                                        <FoodItem key={fooditem._id} fooditem={fooditem} />)}
                                </div>
                                : <p>No fooditems available</p>}
                        </div>) :
                    <p>No menus available</p>}
        </div>
    )
}
