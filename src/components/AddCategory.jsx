import { useState } from 'react';

export const AddCategory = ({addCategory}) => {
    const [ inputValue, setInputValue ] = useState('');

    const onInputchangue = (e)  =>{
        setInputValue(e.target.value);
    }

    const onSubmit =(e)=>{
        e.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        addCategory( [inputValue]);

        setInputValue('');
    }

  return (
    <>

    <form onSubmit={onSubmit}>

        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ onInputchangue }
            >    
        </input>
    </form>
    
    </>
  )
}
