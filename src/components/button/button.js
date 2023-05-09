import React from 'react'


const Button = (props) =>{
    const mensagem = () => {
        alert('A label deste botão é ' + props.label)
    }
        
    return <button onClick={mensagem}>{props.label}</button>
}

export default Button