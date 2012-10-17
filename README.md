# Music streaming example

 Build a HTML5 / Javascript UI to a streaming music library.

## Goals

 * Build a HTML5 / Javascript powered UI for playing and browsing music.
 * Stream music via Erlang application

## TODO

 * get music_streamer listening on port (DONE)
 * setup webmachine and deps to load : need to setup catalogue deps to load
 * load catalogue of songs from file
 * loading Javascript and serving HTML


Applications:
 * web app serves JavaScript / HTML / Templates
 * music_streamer, serves music files up to HTML music player
   REST API
       GET /catalogue.json
       GET /album/:name.json
       GET /album/:name/track/:number.json
       GET /album/:name/track/:number.mp3  => returns binary stream
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


## Building From Source

Clone webmachine and mochiweb git repositories into the lib directory.

    git clone git://github.com/mochi/mochiweb.git lib
    git clone git://github.com/basho/webmachine.git lib

Then run the sinan build with

    sinan build
