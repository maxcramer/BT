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
      }
    })
  }

  render() {
    return (
      <div style={{height: '100%'}}>
          <Toolbar />
          <SideDrawer />
          <Backdrop />
          <main style={{marginTop: '64px'}}>
            <p>Page content</p>
          </main>
      </div>
    );
  }
}

export default App;
