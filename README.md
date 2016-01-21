# Leaflet Ant Path
## *Creates a leaflet polyline with a 'ant-path' animated flux*
[Live demo here](http://rubenspgcavalcante.github.io/leaflet-ant-path)

### Installing

Via Bower:
```
 bower install leaflet-ant-path
```

Via NPM:
```
 npm install leaflet-ant-path
```

Or just [download](https://github.com/rubenspgcavalcante/leaflet-ant-path/archive/master.zip) this source code


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
    var antPolyline = new L.Polyline.AntPath(latlngs, options);
    //or use the factory
    antPolyline = L.polyline.antPath(latlngs, options);
    
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
The AntPath extends from the [FeatureGroup](http://leafletjs.com/reference.html#featuregroup), but you initialise with
the same options of a common [Polyline]((http://leafletjs.com/reference.html#polyline)), with some extra options, like the flux color.  

| name | type | example | description |
|------|------|---------| ------------|
|latlngs| L.LatLng[] **or** Array\[number, number\]  | \[ \[0, 10\], \[-20, 0\], ... \] | A array of latitude and longitudes (same as used in [Polyline constructor](http://leafletjs.com/reference.html#polyline) )
|options| Object  | {color: 'red', weight: 5, ...}  | Same as the [Polyline options](http://leafletjs.com/reference.html#polyline-options) plus the **extra** options bellow
|options.pulseColor| string | #FF00FF | Adds a color to the dashed flux (default: 'white')
|options.delay | string | 120 | Add a delay to the animation flux (default: 200)
|options.dashArray| [number, number] | The size of the animated dashes (default: [10, 20])

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