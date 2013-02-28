# Music streaming example

 Build a HTML5 / Javascript UI to a streaming music library.

## Goals

 * Build a HTML5 / Javascript powered UI for playing and browsing music.
 * Stream music via Erlang application

## TODO

* add simple html5 player from Peepcode screencast. CURRENT
 * if we wrap it up with a playlist and simple interface to play/stop/skip etc
   we should be good.
* add instructions for dealing with the submodule
* add view for editing an album
* add view for creating a new album
* include ember.js library and deps (DONE)
* serve up a main HTML page (DONE)
* basic styling with CSS (DONE)
  -> Redo styling using http://foundation.zurb.com
* setup deployment to Heroku
  * add instructions for deploying to heroku
* serve index.html from root url. (DONE)
  -> Sorted for now, reading the html directly
* configure a Postgres backend
* layout main views of application
* change JS to use Require.js
* add in SoundManager2 for audio playback
* add panel for visualiser https://github.com/jsantell/dancer.js



|---------------------------------------------------------------|
|               |
| List of Music |          Player / Playlist ??
|               |
|               |-----------------------------------------------|
|               |  Selected Album Details
|               |     or Visualiser
|               |
|               |
|               |
|               |
|               |
|               |
|               |
|               |
|---------------------------------------------------------------|



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
