import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import './Toolbar.css';

const Toolbar = (props) => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <DrawerToggleButton />
            </div>
            <div className="toolbar__logo">
                <a href='/'>The Logo</a>
            </div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li>
                        <a href="/">Link 1</a>
                    </li>
                    <li>
                        <a href="/">Link 2</a>
                    </li>
                    <li>
                        <a href="/">Link 3</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;