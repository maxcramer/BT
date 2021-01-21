import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
    state = {
        query: '',
    }

    handleOnInputChange = (e) => {
        let searchInput
        if(this.props.parentCallback) {
            this.props.parentCallback (
                searchInput = e.target.value,
                this.setState({query: searchInput}),
        
            )
        }
      
    };

    render() {
        
        return (
            <div className="SearchBar_container">
                <input 
                    type='text'
                    query={this.state.query}
                    placeholder="Search Articles"
                    onChange={this.handleOnInputChange}
                />
            </div>
        )
    }
    
}

export default SearchBar;