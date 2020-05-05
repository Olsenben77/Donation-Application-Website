var map, infoWindow, infoWindowTwo;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 27.9881, lng: 86.925 },
    zoom: 13
  });
  // Create the search box and link it to the UI element.
  var input = document.getElementById('search');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  
  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
  
  
  
  infoWindow = new google.maps.InfoWindow();
  // Try HTML5 geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.open(map);
        map.setCenter(pos);
        
        //Charity search
        var request = {
          location: pos,
          radius: 8047,
          query:"Charity",
        };
        infoWindowTwo = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.textSearch(request, callback);
        
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
      );
    }
    else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  };
  
  //callback function
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK)
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i], i);
    }
  }
  //create marker function
  function createMarker(place, i) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    var results = document.getElementById('results');
    var tr = document.createElement('tr');
    tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
    var nameTd = document.createElement('td');
    var name = document.createTextNode(place.name);
    nameTd.appendChild(name);
    tr.appendChild(nameTd);
    results.appendChild(tr);


    google.maps.event.addListener(marker, 'click', function(){
      infoWindowTwo.setContent(place.name);
      infoWindowTwo.open(map, this);
      console.log(place);
      $("#container").html("Store: " + place.name);
      $("#container2").html("Location: " +place.formatted_address);
      if (place.opening_hours.open_now === true){$("#container3").html("This place is open!")
    } else {
      $("#container3").html("Sorry, this place is closed.")
    };
    // $("#container4").text("Store: " + JSON.stringify(place));
  })
  
}
//

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
    ? "Error: The Geolocation service failed."
    : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }