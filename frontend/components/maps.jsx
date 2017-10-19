import React from 'react';
import Search from './search.jsx';

export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            map: null
        };
        
    }
    componentDidMount() {
        const google = window.google;

       if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition((position) => {
              let pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
              };
              this.setState({map: new google.maps.Map(document.getElementById('map-container'),
                {
                    center: pos,
                    zoom: 13
                })});
              let marker = new google.maps.Marker({
                  position: pos,
                  map: this.state.map

              });
              
           });
       }
    }
    
    render() {
        return (
            <div id='map-container' ref="map">
                <Search map={this.state.map} />
            </div>
        );
    }
}

