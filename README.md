# Music streaming example

 Build a HTML5 / Javascript UI to a streaming music library.

## Goals

 * Build a HTML5 / Javascript powered UI for playing and browsing music.
 * Stream music via Erlang application

## TODO

* include ember.js library and deps (DONE)
* serve up a main HTML page (DONE)
* basic styling with CSS (DONE)
  -> Redo styling using http://foundation.zurb.com
* setup deployment to Heroku
* serve index.html from root url. (DONE)
  -> Sorted for now, reading the html directly
* configure a Postgres backend
* layout main views of application

* TDD out the erlang backend

    REST API
       GET /catalogue.json
       GET /album/:name.json
       GET /album/:name/track/:number.json
       GET /album/:name/track/:number.mp3  => returns binary stream
       GET /album/:name/track/:number.aac  => returns binary stream
       GET /artist/:name.json

 {catalogue: [{album: 'Name'}, ..]}

 {album:
     name: '',
     artist: '',
     tracks: [1,2,3,4,5],
     ...
  }

  {track:
      artist: '',
      title: '',
      ...
  }
