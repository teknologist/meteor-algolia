# meteor-algolia

Meteor package to handle the blazing fast [Algolia](http://algolia.com) search engine (working on client and server).

**NOTE: This is a fork of  https://atmospherejs.com/acemtp/algolia to use an up to date version of the algoliasearch client.**

## Example

### Server side

    var client = algoliasearch(<algolia_application_id>, <algolia_private_id>, params);

    var index = client.initIndex(<algolia_index_name>);

    // array contains the data you want to save in the index
    var array = [ { objectID: 1, text: 'Hello' }, { objectID: 2, text: 'World' }  ];
    index.saveObjects(array, function (error, content) {
      if (error) console.error('Error:', error);
      else console.log('Content:', content);
    });

### Client side

    var client = algoliasearch(<algolia_application_id>, <algolia_public_id> , params);

    var index = client.initIndex(<algolia_index_name>);

    // search 'hello' in the index
    index.search('hello', function (error, content) {
      if (error) console.error('Error:', error);
      else console.log('Content:', content);
    });

### Meteor example app

There's a working example in the `example` directory.

- cd example
- meteor

Check the [source code](https://github.com/acemtp/meteor-algolia/tree/master/example).

### Documentation

Read the [official Algolia doc](https://www.algolia.com/doc/node#using-the-api) for the available functions and options.

### Changelog
- Forked and upgraded algoliasearch to 3.14.1
- Moved to algolia 3.9.1
- The global object is now called **AlgoliaSearch** both on client and server
- Moved to algolia v3+ [check the migration guide](https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x)
- Moved to algolia 3.7.8
- Add a working client and server example (cd example; meteor)
