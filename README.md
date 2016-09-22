# Leaflet Ant Path
[![Build Status](https://travis-ci.org/rubenspgcavalcante/leaflet-ant-path.svg?branch=master)](https://travis-ci.org/rubenspgcavalcante/leaflet-ant-path)

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

Or just [download](https://github.com/rubenspgcavalcante/leaflet-ant-path-bower/archive/master.zip) this source code


### Requirements
    
    - Leaflet >= 0.7.7
    - Leaflet 1.0.0-rc
    
### Browser compatibility
Tested on:

    - Firefox 43
    - Chrome 45
    - Chromium 47

### UMD compatible
Can be used with asynchronous module loaders and CommonJS packers
    
### Important!
Soon leaflet 0.7 will be deprecated, and so MultiPolyline. Because this, the MultiAntPath is
also been **deprecated**, therefore use the L.LayerGroup to control your AntPath layers collection. :)
    
### Using the plugin
It's just like a polyline:  

``` javascript
    // Using the AntPath
    var antPolyline = new L.Polyline.AntPath(latlngs, options);
    
    //or use the factory
    antPolyline = L.polyline.antPath(latlngs, options);
    
    antPolyline.addTo(map);
    
    // ... And the MultiAntPath
    var antPolyline = new L.MultiPolyline.MultiAntPath(latlngsList, options);
    
    //or use the factory
    antPolylines = L.multiPolyline.multiAntPath(latlngsList, options);
    
    antPolylines.addTo(map);
    
```

Note for AMD/CommonJS:  
The direct use as 'AntPath' now is **deprecated** and instead is exported by default, the modules which contains the AntPath and MultiAntPath

Using with AMD:  

``` javascript
require(['leafletAntPath'], function(AntPathModule) {
    // ...
    var antPolyline = new AntPathModule.AntPath(latlngs, options);
    antPolyline.addTo(map);
    
    var multiAntPolylines = new AntPathModule.MultiAntPath(latlngs, options);
    multiAntPolylines.addTo(map);
});
```

Using with browerify:

``` javascript
    var AntPath = require('leafletAntPath').AntPath;
    var MultiAntPath = require('leafletAntPath').MultiAntPath;
    
    // ...
    var antPolyline = new AntPath(latlngs, options);
    antPolyline.addTo(map);
```

Using with ES6 imports
``` javascript
    import {AntPath, MultiAntPath} from 'leafletAntPath';
    
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
|options.paused| boolean | true/false | Starts with the animation paused (default: false)
|options.pulseColor| string | #FF00FF | Adds a color to the dashed flux (default: 'white')
|options.delay | string | 120 | Add a delay to the animation flux (default: 400)
|options.dashArray| [number, number] | [15, 30] |The size of the animated dashes (default: [10, 20])

---

### Building and Testing
To run the build, before install the npm and gulp dependencies, then run:

To build
```
    gulp pack
```

To test:
```
    gulp test
```

### License

This project is under the [MIT LICENSE](http://opensource.org/licenses/MIT)