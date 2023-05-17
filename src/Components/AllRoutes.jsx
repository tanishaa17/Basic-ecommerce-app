import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Categories } from './Categories'
import { Search } from './Search'
import { WishList } from './WishList'
import { SingleCategory } from './SingleCategory'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Categories />} />
            <Route path='/:categoryName' element={<SingleCategory />} />
            <Route path='/search' element={<Search />} />
            <Route path='/wishlist' element={<WishList />} />
        </Routes>
    )
}
