import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) =>{
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setCategories( cate => [ inputValue, ...cate] )
            setInputValue('')
            console.log("Enviado")
        }
        
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
    );



}

//HACER REQUERIDA UNA FUNCIÓN AL LLAMAR EL COMPONENTE

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}