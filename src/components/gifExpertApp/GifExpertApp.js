import React, {useState} from 'react';
import AddCategory from '../addCategory/AddCategory';
import GifGrid from '../gifGrid/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    // const handleAdd = () => {
    //     /*Para agregar un nuevo elemento a un array del useState crearemos un nuevo array con [] y dentro de este 
    //     copiaremos el array del useState con ...categories y añadiremos el elemento que queramos detras de la ,*/
    //     setCategories( [...categories, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr></hr>


            <ol>
                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category} categories={categories} setCategories={setCategories} />;
                    })
                }
                
            </ol>
        </>
    );
}

export default GifExpertApp;
