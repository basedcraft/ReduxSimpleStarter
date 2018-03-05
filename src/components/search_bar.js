import React, { Component } from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
        // Section 1, Lecture 17 2:37
    }
    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    }
}

export default SearchBar;