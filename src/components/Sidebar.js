import React from 'react';
import Nav from 'react-bootstrap/Nav'
import FocusTrap from "focus-trap-react";

import './Sidebar.css';

export default function Sidebar({ isOpen, onClose }) {
    let className = "Sidebar";

    if (!isOpen) {
        className += " Sidebar--closed"
    }
    return (
        <FocusTrap active={isOpen} paused={!isOpen}>
            <div>
                {isOpen && (
                    <label className="Sidebar__mask">
                        <button aria-label="Close menu"
                            className="Sidebar__mask-button"
                            onClick={onClose}></button>
                    </label>
                )}
                <aside className={className}>
                    <Nav activeKey="/home" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="/">Quiz</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/stats">Stats</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </aside>
            </div>
        </FocusTrap>
    )
}
