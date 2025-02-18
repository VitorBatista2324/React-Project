import React from "react";
import './Button.css';

const Button = ({children}) => {
    const handleClick = () => {
        alert('Você clicou no botão!');
    };

    return (
        <button className="Button2" onClick={handleClick}>{children}</button>
    );
};


export default Button;