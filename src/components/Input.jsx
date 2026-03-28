import React  from 'react'


export const Input = ({setInputValue}) => {

  return (
   
    <input
    onChange={(event) => {
    setInputValue(event.target.value)
    console.log(event.target.value);
    
}}
    type= "text"
    className='border border-black
     w-3xl rounded-sm'
    
    />
  )
}


// xs=2px , sm=4px , md=6px , lg=8px , xl=12px,
// 2xl=16px , 3xl=24px , 4xl=32px,