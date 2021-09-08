import React, { useState, useEffect } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { useStore } from 'react-redux';

export const MapContainer = (props) => {
    const { google, query } = props;
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (query){
            searchByquery(query)
        }
    }, [query])
    
    function searchByquery(query){
        const service = new google.maps.places.PlacesService(map);
        
        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query,
        };

        service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK){
                console.log(results)
            }
        });
    }
    
    function searchNearby(map, center){
        const service = new google.maps.places.PlacesService(map);
        
        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant'],
        };

        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK){
                console.log(results)
            }
        });
    }

    function onMapReady(_, map){
        setMap(map);
        searchNearby(map, map.center)
    }

    return (
        <Map 
            google={google}
            centerAroundCurrentLocation 
            onReady={onMapReady}
            onRecenter={onMapReady}
        >

        </Map>
    )
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR'
})(MapContainer);