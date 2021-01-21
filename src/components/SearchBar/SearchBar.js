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
            <div style={{width: '100%', textAlign: 'center'}}>
                <input 
                    style={{width: '20%'}}
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