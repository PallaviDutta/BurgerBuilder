import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Layoutcss from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state={
        showSideDrawer : true
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) =>{
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render(){
        return(
        <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
        open={this.state.showSideDrawer}
        closed={this.sideDrawerClosedHandler}/>
        <main className='Content'>
        {this.props.children}
        </main>
    </Aux>
        )
    }
} 

//Layout will have both the toolBar and the sideDrawer.
export default Layout;