import { useState } from 'react';
import { AddCategory, GifContainer } from './componets';


export const GifexpertApp = () => {
    
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) =>{
       
        if ( categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories ]);

    }
  
    return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={onAddCategory} /* categories={categories} setCategories={ setCategories } *//>
        
        {categories.map( category =>  /* <-- el map a categories, que por cada categoria returna, un componete GifContainer, con las propiedades 'key' y 'category' */
            <GifContainer               
                key={category} 
                category={category}
            />
        )}
        {/* {categories.map((category, i) => <li key={i}>{ category }</li> )} */}
    </> 
  )
}

