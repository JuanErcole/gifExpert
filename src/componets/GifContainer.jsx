import { GifItem } from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifContainer = ({category}) => {

    const {images, isLoading} = useFetchGifs( category )    

    return (
    <>
        <h3> { category } </h3>

        { isLoading && ( <h3>Cargando...</h3> )}

        <div className="card-grid">
            {images.map((image) => 
              <GifItem
                key={image.id} 
                /* title={image.title} 
                url={image.url}        <-- en lugar de tener esto, puedo usar el operador spread y esparcir todas las props de image en el cmponente, esto se usa cuando son muchas propiedades*/
                { ...image }
                /> )}
        </div>
    </>
  )
};  
