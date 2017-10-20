import React from 'react';
import Results from './results';
class Search extends React.Component {
    constructor(props){
        
        super(props);
        this.state = {
            markers: []
        };

        // this.callback = this.callback.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        this.createMarkers = this.createMarkers.bind(this);
    }

    componentDidMount() {
        let input = document.getElementById('search-box');
        this.searchBox = new google.maps.places.SearchBox(input);
        this.service = new google.maps.places.PlacesService(this.props.map);
        console.log(this.props.map)
            if (this.searchBox && this.props.map) {
                this.searchBox.setBounds(this.props.map.getBounds());
            }

    }
    createMarkers() {
        let places = this.searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        this.state.markers.forEach( (marker) => {
            marker.setMap(null);
        });
        this.setState({markers: []});

        places.forEach((place) => {
            let bounds = new google.maps.LatLngBounds();
            let icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)

            };
        });

        this.state.markers.push(new google.maps.Marker({
            map: this.props.map,
            icon,
            title: place.name,
            position: place.geometry.location
        }));

        if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);

        } else {
            bounds.extend(place.geometry.location);
        }

    }
    render() {
        return(
            <div id="search">
               <input type="text" id="search-box" placeholder="Search"/>
            </div>
        );
    }
}

export default Search;