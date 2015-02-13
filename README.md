# gpx2json

Simple tool to parse GPX files using xml2js api.


# Installation

meteor add selaias:alerts


# Usage

You call the gpx2json.parse function with parameter the gpx stream. You will get an array of tracking items in the following format : <code>{lon:'4.496940', lat: '50.728383', ele: '0.00', time: '2014-09-20T09:41:45.000Z', sat: '5'}</code>

```
var fs = Npm.require('fs');

var f = process.env.PWD + '/file.gpx';

var fileContent = fs.readFileSync(f, 'utf8');

var result = gpx2json.parse(fileContent);

_.each(result, function(item){
  console.log(item);
})

```

alternatively you can just call `<code>gpx2json.coords</code>` to get a minified array of just the coordinates in the following format:  `<code>{ lat: 50.728357, lng: 4.4971 }</code>`


```
var fs = Npm.require('fs');

var f = process.env.PWD + '/file.gpx';

var fileContent = fs.readFileSync(f, 'utf8');

var result = gpx2json.parse(fileContent);

var coords = gpx2json.coords;

```

# Contributions

This is a very basic, simple utility that can grow with your help!
