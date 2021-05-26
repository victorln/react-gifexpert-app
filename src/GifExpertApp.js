import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState([])

    // const handleAdd = () => {       
    //     //setCategories([...categories, 'New Item' + categories.length + 1]);     
    //     setCategories( (cats) => [...cats, 'New Item' + cats.length + 1]);     
    // };

    

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories }/>
            <hr></hr>
            
            <ol>
            {
                categories.map((category) => {
                    return <GifGrid key={ category } category={category}/> 
                    // return <li key={ category }> {category} </li>
                })
            }
            </ol>
        </>
    )
}
