import React from 'react';
import Search from './search.jsx';

export default class Map extends React.Component {
    componentDidMount() {
        const google = window.google;

       if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(function(position) {
              let pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
              };
              let map = new google.maps.Map(document.getElementById('map-container'), {
                center: pos,
                zoom: 13
              });
              let marker = new google.maps.Marker({
                  position: pos,
                  map: map

              });
              
           });
       }
    }
    
    render() {
        return (
            <div id='map-container' ref="map">
                <Search map={this.map} />
            </div>
        );
    }
}

