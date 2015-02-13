Package.describe({
  name: 'selaias:gpx2json',
  version: '0.0.1',
  summary: 'Parsing GPX files in JSON (using xml2js)',
  git: 'https://github.com/selaias/gpx2json.git',
  documentation: 'README.md'
});

Npm.depends({'xml2js': "0.4.4"});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  
  api.use('underscore', ['server']);
  
  api.addFiles('gpx2json.js', ['server']);
  
  api.export('gpx2json');
});
