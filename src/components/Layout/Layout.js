import React from 'react';
import Aux from '../../hoc/Aux';
import Layoutcss from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) =>(
    <Aux>
        <Toolbar />
        <SideDrawer/>
        <main className='Content'>
        {props.children}
        </main>
    </Aux>
);

//Layout will have both the toolBar and the sideDrawer.
export default layout;