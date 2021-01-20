import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => (
    <nav className="side-drawer">
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
    </nav>
)
export default SideDrawer;