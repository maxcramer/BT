import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
    state = {
        query: '',
    }

    handleOnInputChange = (e => {
        this.setState({ query: e.target.value });      
    });

    handleButtonClick = () => {
        this.props.callBack(this.state.query);
    };

   

    render() {
        
        return (
            <div className="SearchBar_container">
                <input 
                    type='text'
                    value={this.state.query}
                    placeholder="Search Articles"
                    onChange={this.handleOnInputChange}
                />
                <button disabled={!this.state.query} onClick={this.handleButtonClick}>Search</button>

            </div>
        )
    }
    
}

export default SearchBar;