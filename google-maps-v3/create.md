
create a google map

```html
<div id="map-canvas"></div>
<script src="//maps.googleapis.com/maps/api/js?sensor=true&libraries=places"></script>
```
```css
#map-canvas {
    height: 550px;
    width: 100%;
}
```
```javascript
var map,
    markers = [],
    circles = [];

function initialMap() {
    var pos = new google.maps.LatLng(25.0392179,121.5398562);

    google.maps.visualRefresh = true;

    var mapOptions = {
        zoom: 15,
        disableDefaultUI: true,
        center: pos,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
}
```
