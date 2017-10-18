import React from 'react';
import Results from './results';
class Search extends React.Component {
    constructor(props){
        
        super(props);
        this.state = {
            query: ""
        };

        this.update = this.update.bind(this);
        // this.callback = this.callback.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.createMarker = this.createMarker.bind(this);
    }

    componentDidMount() {
        let input = document.getElementById('search-box');
        this.searchBox = new google.maps.places.SearchBox(input);

    }
    handleSubmit() {
        this.searchBox.setBounds(this.map.getBounds());
    }


    update() {
        return e => this.setState({query: e.currentTarget.value});
    }
    render() {
        return(
            <div id="search">
               <input type="text" id="search-box" onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default Search;