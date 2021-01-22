import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
                <button disabled={!this.state.query} onClick={this.handleButtonClick}>
                    <FontAwesomeIcon className='icon' icon={faSearch} size="lg"/>
                </button>

            </div>
        )
    }
    
}

export default SearchBar;