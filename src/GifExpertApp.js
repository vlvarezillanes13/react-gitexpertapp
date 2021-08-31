import React, { useState } from 'react'
import {AddCategory} from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid';
export const GifExpertApp = () => {


    const [categories, setcategories] = useState(['One Punch']);
    
    //const handleAdd = () => {
    //   setcategories([...categories,'HunterxHunter']);
    //}


    return (
        <>
          <h2>GifExpertApp</h2>  
          <hr />
          <AddCategory setcategories={setcategories}/>
          <ol>
              {
                  categories.map( category => (
                      /*return <li key={category}>{category}</li>*/
                      <GifGrid 
                        key = {category}
                        category={category} 
                      />
                  ))
              }
          </ol>
        </>
    )
}
