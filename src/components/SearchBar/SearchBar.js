import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        query: '',
        results: [],
        loading: false,
        message: ''
    }

    handleOnInputChange = (e) => {
        const query = e.target.value;
        console.log(query);
    };

    render() {
        console.log(this.state)
        return (
            <div>
                <input 
                    type='text'
                    value=""
                    placeholder="Search Articles"
                    onChange={this.handleOnInputChange}
                />
            </div>
        )
    }
    
}

export default SearchBar;