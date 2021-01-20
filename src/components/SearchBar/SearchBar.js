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
        this.setState({query: query});
    };

    render() {
        const { query } = this.state;
        console.log(this.state)
        return (
            <div>
                <input 
                    name="query"
                    type='text'
                    value={query}
                    placeholder="Search Articles"
                    onChange={this.handleOnInputChange}
                />
            </div>
        )
    }
    
}

export default SearchBar;