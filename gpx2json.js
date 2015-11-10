var xml2js = Npm.require("xml2js");
var Future = Npm.require('fibers/future');

if (_.isUndefined(gpx2json)) {
  gpx2json = {};
}

gpx2json = {

  _options:{
    mergeAttrs : true, explicitArray :false 
  },

  coords: [],

  parse: function(content, options){

    var self = this;
    var fut = new Future();

    if (_.isObject(options)){
      this._options = _.extend(this._options, options);
    }

    xml2js.parseString(content, this._options, function(error, result){
       var data = [];
       var sorted = [];
      if (error){
        throw fut.error(error);
      }else{
       
        data = result.gpx.trk.trkseg.trkpt;
        sorted = _.sortBy(data, 'time');
        _.each(sorted, function(item){
          var latlng =  {lat: Number(item.lat), lng: Number(item.lon), timestamp: (new Date(item.time)).getTime()};
          self.coords.push(latlng);
        })
        fut.return(data);
      }
    });
    return fut.wait();
  },
}