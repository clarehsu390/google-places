import React from 'react';
import Results from './results';
class Search extends React.Component {
    constructor(props){
        
        super(props);
        this.state = {
            query: ""
        };

        // this.callback = this.callback.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.createMarker = this.createMarker.bind(this);
    }

    componentDidMount() {
        let input = document.getElementById('search-box');
        this.searchBox = new google.maps.places.SearchBox(input);
        
        if (this.searchBox && this.props.map) {
            this.props.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
            this.searchBox.setBounds(this.props.map.getBounds());
        }

    }
    handleClick() {
        
        
    }
    render() {
        return(
            <div id="search" autocomplete="on">
               <input type="text" id="search-box" placeholder="Search"/>
            </div>
        );
    }
}

export default Search;