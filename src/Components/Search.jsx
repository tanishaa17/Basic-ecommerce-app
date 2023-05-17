import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import axios from 'axios';
import "../Styles/Search.css"
export const Search = () => {
    const [search, setSearch] = useState("");
    const [data, setdata] = useState([])

    const getSearchedData = async (search) => {
        try {
            let res = await axios.get(`https://dummyjson.com/products/search?q=${search}`)
            // console.log(res.data.products);
            return res.data.products
        } catch (error) {
            console.log(error)
        }
    }
    const getData = async () => {
        try {
            let data = await getSearchedData(search);
            // console.log(data)
            setdata(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [search]);

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div>
            <Navbar />
            <input id='inpBox' onChange={handleSearch} type="text" placeholder='Search Product' value={search} />
            <div id="searchBox">
                {data.length == 0 ? <h2>NO RESULT FOUND</h2> :
                    data.map((elem) => {
                        return (
                            <div>
                                <img src={elem.images[0]} alt='' />
                                <p><span>Title: </span>{elem.title}</p>
                                <p><span>Description: </span>{elem.description}</p>
                                <p><span>Price: </span>₹ {elem.price}</p>
                            </div>
                        )
                    })}
            </div>

        </div>
    )
}
