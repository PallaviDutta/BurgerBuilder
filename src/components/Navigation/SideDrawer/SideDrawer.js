import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) =>{
    //...
    return(
        <div className='SideDrawer'>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
}
//Will have the sidebar itself and the toggle button
export default sideDrawer;