import React, { useState } from 'react'
import { Navbar } from './Navbar'
import "../Styles/Wishlist.css"
export const WishList = () => {

    let wishlist = JSON.parse(localStorage.getItem("wishlist") || [])

    const [wishlistData, setWishlistData] = useState(wishlist)

    const removeItem = (item, index) => {
        wishlist = item.filter((elem, ind) => {
            return ind !== index
        })
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
        setWishlistData(wishlist)
    }
    return (
        <div>
            <Navbar />
            {/* {wishlistData.length == "" ? <h1>Wishlist is Empty!</h1>} */}
            <div id='wishlist'>
                {wishlistData.length === 0 ? <h2 style={{ textAlign: "center", margin: "auto" }}>Wishlist is Empty! Please Add Somethig....</h2> :
                    wishlistData.map((elem, ind) => {
                        return (
                            <div key={elem.id}>
                                <img src={elem.images[0]} alt="" />
                                <p><span>Name: </span>{elem.title}</p>
                                <p><span>Description: </span>{elem.description}</p>
                                <p><span>Price: ₹</span> {elem.price}</p>
                                <button onClick={() => removeItem(wishlist, ind)} >Remove</button>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}
