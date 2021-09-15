import React, {useState, useEffect} from 'react';
import GifGridItem from './GifGridItem';
import {getGifs} from '../functions/getGifs';//Ponemos la funcion en la carpeta funciones para limpiar el código

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    //Usaremos el useEffect para que una función solo se ejecute una vez cuando el componente se renderice, sino en el
    //caso de que tuvieramos un useState se ejecutaría cada vez que hubiera un cambio.

    //Al ser una función asincrona el then se ejecuatará si la peticion fetch se hace correctamente
    useEffect( () => {
        getGifs(category).then( imgs => setImages(imgs))
    }, [category] );//Ponemos el category aquí para que en el caso de que se cambie su valor se ejecute otra vez el use effect
    
    

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>                
                <ol>
                    {images.map( img => {
                        return <GifGridItem 
                            key={img.id} 
                            {...img}
                        />
                    })}
                </ol>
            </div>
        </>
    )

}

export default GifGrid;
