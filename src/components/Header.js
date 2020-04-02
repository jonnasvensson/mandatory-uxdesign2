import React from 'react';
import './Header.css'

export default function Header({ onClickMenuButton }) {

    return (
        <header className="header">
            <button className="header__menu-button" onClick={onClickMenuButton} aria-label="Open menu" >
                <i className="header__menu-icon material-icons">menu</i>
            </button>
            <div className="logo">
                <div className="logo__inner"></div>
                <div className="logo__tail"></div>
            </div>
            <h1>uiz</h1>
        </header>
    )
}
