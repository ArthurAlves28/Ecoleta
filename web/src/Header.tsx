import React from 'react';

interface HeaderProps {
    title: string;
}

// Todo componente precisa começar com letra maiúscula
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;