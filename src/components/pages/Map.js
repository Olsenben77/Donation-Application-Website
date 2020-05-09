import React,{Component} from 'react';


var map;
var input;
var searchBox;
var geoButton;
var infoWindow;
var marker;
var place;
var markers = [];

function callback (results, status) {
    
    function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          if (markers[i]) {
            markers[i].setMap(null);
          }
        }
       
        markers = [];
        

      }
    clearMarkers();
    clearResults();
    if (status == window.google.maps.places.PlacesServiceStatus.OK)
    for (var i = 0; i < results.length; i++) {
        createMarker(results[i], i);
    }

    function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }

}
function createMarker (place, i) {
    markers[i] = new window.google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    window.google.maps.event.addListener(markers[i], 'click', function() {
        infoWindow.setContent(place.name + "<br>" + place.formatted_address);
        infoWindow.open(map, this);
    });
    
    var results = document.getElementById('results');
    var tr = document.createElement('tr');
    results.appendChild(tr);
    tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
    var nameTd = document.createElement('td');
    var name = document.createTextNode(place.name);
    nameTd.appendChild(name);
    tr.appendChild(nameTd);
    
    tr.onclick = function() {
        window.google.maps.event.trigger(markers[i], 'click');

      };
    }
function getCharitiesSearch () {
        var geocoder = new window.google.maps.Geocoder();
        var address = input.value
        geocoder.geocode({'address': address}, function(results, status) {
            var pos = {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng()
            };
            var request = {
                location: pos,
                radius: 8047,
                query:"Charity",
            };
            var service = new window.google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
        })
    };
class Maps extends Component {
    constructor(){
        super();
        this.getCharitiesGeolocation = this.getCharitiesGeolocation.bind(this)
        this.geoClicker = this.geoClicker.bind(this)
    }
    createScript = ()=> {
        var scripter = document.createElement('script');
        scripter.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBX03GhMwKbff_jiNlFovzpYPB5L6LssMo&libraries=places&callback=initMap`;
        scripter.async = true;
        scripter.defer = true;
        document.body.appendChild(scripter)
    }
    componentDidMount(){
        this.createScript(); 
        window.initMap = this.initMap
    }
    getCharitiesGeolocation () {
        var service = new window.google.maps.places.PlacesService(map);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    var request = {
                        location: pos,
                        radius: 8047,
                        query:"Charity",
                    };
                    infoWindow.open(map);
                    map.setCenter(pos);
                    map.panTo(pos);
                    map.setZoom(10);
                    // Charity search
                    service.textSearch(request, callback);
                },
                function() {
                    // handleLocationError(true, infoWindow, map.getCenter());
                }
            )
            }else {
                // Browser doesn't support Geolocation
                // handleLocationError(false, infoWindow, map.getCenter());
            };
        //   // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
        });
    };
    geoClicker(){
        this.getCharitiesGeolocation()
    }
    initMap  () {
        geoButton = document.getElementById("geoButton");
        infoWindow = new window.google.maps.InfoWindow();
        map = new window.google.maps.Map(document.getElementById("map"), {
            center: {lat: 37.1, lng: -95.7},
            zoom: 3,
            streetViewControl: false,
            mapTypeControl: false,
        }); 
        input = document.getElementById('search');
        searchBox = new window.google.maps.places.SearchBox(input);
        // map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(input);
        map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
        });
        searchBox.addListener('places_changed', function() {
            var bounds = new window.google.maps.LatLngBounds();
            var places = searchBox.getPlaces();
            places.forEach(function(place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
            getCharitiesSearch();
        });
    };
    render () {
        return (
            <div>
                <div>
                    <input id= "search"/>
                    <button class="btn btn-primary" onClick={this.geoClicker}id="geoButton">
                    <i class="far fa-location"></i>
                    Use Current location</button>
                </div>
                <div ref={this.googleMap}id="map"></div>
                <div id="listing">
                    <table id="resultsTable">
                    <tbody id="results"></tbody>
                    </table>
                </div>
            </div>
            )
        };
    }
    export default Maps;
