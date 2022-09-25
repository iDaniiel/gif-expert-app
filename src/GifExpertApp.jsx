import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const api = 'vt6cE8IGDfs7nH4adwdLsAjGAfNc6yOZ';
  const [ categories, setCategories ] =useState(['One Punch']);

    const addCategory = (category) => {
        if( categories.includes( category )) return;

        setCategories([...categories,category]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        
        <AddCategory

            addCategory={addCategory}
        
        />
        
        {
            categories.map( category =>
                (
                    <GifGrid 
                        key={category}
                        category={ category}
                    />
                )
            )
        }
            
    </>
  )
}
