import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        query: '',
    }

    handleOnInputChange = (e) => {
        let searchInput
        this.props.parentCallback (
            searchInput = e.target.value,
            this.setState({query: searchInput}),
    
        )
    };

    render() {
        
        return (
            <div>
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