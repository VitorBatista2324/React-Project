// Header.js
import React from 'react';
import './Header.css'; // Importando um arquivo CSS para estilização (opcional)

const Header = () => {
    return (
        <header className="header">
            <h1>Meu Site</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;