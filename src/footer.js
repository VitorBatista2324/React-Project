import React from 'react';
/*import './Footer.css'; */

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2023 Meu Projeto. Todos os direitos reservados.</p>
            <nav>
                <ul>
                    <li><a href="/privacidade">Política de Privacidade</a></li>
                    <li><a href="/termos">Termos de Serviço</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;