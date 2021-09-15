import React from 'react'

const EraseButton = ({category, setCategories, categories}) => {

    const handleErase = () => {
        const arrayCategories = [...categories];
        const categoryPosition = arrayCategories.indexOf(category);
        if(categoryPosition !== -1){
            arrayCategories.splice(categoryPosition, 1);
        }
        setCategories( categories => arrayCategories );
    }

    return (
        <>
            <button onClick={handleErase}>Borrar</button>
        </>
    )
}

export default EraseButton;