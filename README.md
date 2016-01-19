# Leaflet Ant Path
## *Creates a leaflet polyline with a 'ant-path' animated flux*

### Requirements
    
    - Leaflet >= 0.7.7
    
### Browser compatibility
Tested on:

    - Firefox 43
    - Chrome 45
    - Chromium 47

### UMD compatible
Can be used with asynchronous module loaders and CommonJS packers
    
### Using the plugin
It's just like a polyline:  

``` javascript
    // ...
    var antPolyline = new L.AntPath(latlngs, options);
    antPolyline.addTo(map);
```

Using with AMD:  

``` javascript
require(['leafletAntPath'], function(AntPath) {
    // ...
    var antPolyline = new AntPath(latlngs, options);
    antPolyline.addTo(map);
    
});
```

Using with browerify:  

``` javascript
    var AntPath = require('leafletAntPath');
    // ...
    var antPolyline = new AntPath(latlngs, options);
    antPolyline.addTo(map);
```

### Parameters

| name | type | example | description |
|------|------|---------| ------------|
|latlngs| L.LatLng[] **or** Array\[number, number\]  | \[ \[0, 10\], \[-20, 0\], ... \] | A array of latitude and longitudes (same as used in [Polyline constructor](http://leafletjs.com/reference.html#polyline) )
|options| Object  | {fluxColor: 'red', ...}  | Same as the [Polyline options](http://leafletjs.com/reference.html#polyline-options) plus the **fluxColor** option


---

### Building and Testing
To run the build, before install the npm and gulp dependencies, then run:

To build
```
    gulp style
    ...
    gulp compress
```

To test:
```
    gulp test
```

### License

This project is under the [MIT LICENSE](http://opensource.org/licenses/MIT)