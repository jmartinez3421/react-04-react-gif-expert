import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import EraseButton from './EraseButton';
import GifGridItem from './GifGridItem';

const GifGrid = ({category, setCategories, categories}) => {
    const {data:images, loading} = useFetchGifs(category);       

    return (
        <div id={category}>
            <h3>{category}</h3><span><EraseButton category={category} categories={categories} setCategories={setCategories}/></span>
            <hr/>

            {loading && <p>Cargando...</p>}
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
        </div>
    )

}

export default GifGrid;
