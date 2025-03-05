function initMap() {
    var location = { lat: 53.343793, lng: -6.261007 }; // Координати Дубліна
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}