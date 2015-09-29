// Package metadata file for Meteor.js
var packageName = 'aaronroberson:angular-strap';
var where = 'client';
var version = '2.3.3';
var summary = 'AngularJS 1.2+ native directives for Bootstrap 3. Re-packaged for meteor and includes templates.';
var gitLink = 'https://github.com/aaronroberson/angular-strap';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.use('angular:angular@1.3.0', where)

  api.addFiles([
  'dist/angular-strap.js',
  'dist/angular-strap.tpl.js'
  ], where);
}); 