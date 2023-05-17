import axios from 'axios'
import React, { useEffect, useState } from 'react'

import "../Styles/Categories.css"
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'

const getAllCategories = async () => {
    try {
        const res = await axios.get(`https://dummyjson.com/products/categories`)
        // console.log(res.data);
        return res.data
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}
// getAllCategories()
export const Categories = () => {
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        getCategoryData()
    }, [])

    const getCategoryData = async () => {
        try {
            const data = await getAllCategories();
            setGetData(data)
            // console.log(data)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <Navbar />
            <div id='catDiv'>
                {getData.map((item, id) => {
                    return (
                        <div key={id} >
                            <Link style={{ textDecoration: "none", color: "black" }} to={`/${item}`} >{item}</Link>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}
