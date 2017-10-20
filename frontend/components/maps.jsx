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
        this.setState({map: new google.maps.Map(
            document.getElementById('map-container'), {
                center: {lat: 37.7749, lng: 122.4194},
                zoom: 13
            }
        )});

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
            <div id="map">
                <Search map={this.state.map} />
            <div id='map-container' ref="map"></div>
            </div>
        );
    }
}

