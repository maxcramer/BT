import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  render() {
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop />;
    }
    return (
      <div style={{height: '100%'}}>
          <Toolbar drawerClickedHandler={this.drawerToggleClickHandler}/>
          {sideDrawer}
          {backdrop}
          <main style={{marginTop: '64px'}}>
            <p>Page content</p>
          </main>
      </div>
    );
  }
}

export default App;
