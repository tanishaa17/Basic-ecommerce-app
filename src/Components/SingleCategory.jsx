import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { useParams } from 'react-router-dom';
import "../Styles/SingleCategory.css"
export const SingleCategory = () => {

    const { categoryName } = useParams();
    const [category, setCategory] = useState([]);

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

    const getCatData = async () => {
        try {
            let res = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
            let data = await res.json();
            setCategory(data.products);
        } catch (err) {
            console.log("err:", err);
        }
    };
    // getCatData();
    useEffect(() => {
        getCatData();
    }, []);

    const handleWishlist = (val) => {
        wishlist.push(val)
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }

    return (
        <div>
            <Navbar />
            <h1>{categoryName}</h1>
            <div id='cat'>
                {category?.map((elem) => {
                    return (
                        <div id='product'>
                            <img src={elem.images[0]} alt="" />
                            <p>{`Name : ${elem.title}`}</p>
                            <p>{`Description : ${elem.description}`}</p>
                            <p>{`Item Price : ${elem.price}`}</p>
                            <button onClick={() => handleWishlist(elem)} >Add to Wishlist</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
