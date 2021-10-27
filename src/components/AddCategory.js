import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        //En el atributo target.value del evento se encuentra el valor del input
        const nuevaCategoria = e.target.value;
        console.log('handleInputChange lanzado');

        //Actualizamos el useState con el valor introducido por el usuario
        setInputValue(nuevaCategoria);
    }

    const handleSubmit = (e) => {
        //Con el método preventDefault evitamos que el navegador se recargue al realizar el submit
        e.preventDefault();

        if( inputValue.trim().length >= 2){
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
        }

        
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Cada vez que haya un cambio en el input se lanzará el evento onChange, el value del input será el 
            valor del useState */}
            <p style={{display:'none'}}>{inputValue}</p>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange}
                placeholder='¿Qué gifs quieres buscar?'
            />
        </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;