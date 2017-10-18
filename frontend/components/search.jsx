import React from 'react';
import Results from './results';
class Search extends React.Component {
    constructor(props){
        
        super(props);
        this.state = {
            query: "",
            map: this.map
        };

        this.update = this.update.bind(this);
        // this.callback = this.callback.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.createMarker = this.createMarker.bind(this);
    }
    handleSubmit() {
        let google = window.google;
        const service = new google.maps.places.PlacesService(new google.maps.Map(document.getElementById('map-container'), {
            center: pos,
            zoom: 13
          }););
        service.nearbySearch({
            location: {lat: 37.7758, lng: -122.435},
            radius: 500,
            type: [this.state]},
            this.callback
        );
        console.log(this.props);
    }


    update() {
        return e => this.setState({query: e.currentTarget.value});
    }
    render() {
        return(
            <div id="search">
                <input type="text" placeholder="Search" value={this.state.query} onChange={this.update()}/>
                <button onClick={this.handleSubmit}>Search</button>
                <Results />
            </div>
        );
    }
}

export default Search;