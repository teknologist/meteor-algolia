Package.describe({
  name: 'teknologist:algolia',
  summary: 'Package to handle the blazing fast Algolia search engine (works on client and server)',
  version: '3.14.1',
  git: 'https://github.com/teknologist/meteor-algolia.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.addFiles(['algoliasearch-client-js/dist/algoliasearch.js', 'client.js'], 'client');
  api.addFiles('server.js', 'server');

  api.export('AlgoliaSearch', ['client', 'server']);
});

Npm.depends({
  'algoliasearch': '3.14.1'
});
