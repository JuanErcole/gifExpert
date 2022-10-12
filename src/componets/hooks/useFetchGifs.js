import { useEffect, useState } from "react";
import { getGifs } from "../../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async () =>{
        const newImages = await getGifs(category);
        setImages(newImages); 
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
      
    }, [])
     
    return{
        //images: images,  cuando tengo una propuiedad, que de valor tiene el mismo nombre, lo puedo simplificar de la siguiente manera
        images,
        isLoading
    }

}
