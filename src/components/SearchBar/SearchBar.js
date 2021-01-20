import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        query: '',
        results: [],
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
                    input={this.state.query}
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