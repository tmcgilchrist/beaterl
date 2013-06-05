# Music streaming example

 Build a HTML5 / Javascript UI to a streaming music library.

## Goals

 * Build a HTML5 / Javascript powered UI for playing and browsing music.
 * Stream music via Erlang application

## TODO

* add simple html5 player from Peepcode screencast.
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


(beaterl@phoenix)1> Album = album:new(id, "Bleach", "Nirvana", "'static/img/nirvana-bleach.jpg'").
{album,id,"Bleach","Nirvana",
       "'static/img/nirvana-bleach.jpg'"}
(beaterl@phoenix)2> Album.save().
* 1: illegal expression
(beaterl@phoenix)3> Album:save().
{ok,{album,"album-1","Bleach","Nirvana",
           "'static/img/nirvana-bleach.jpg'"}}
(beaterl@phoenix)4> Track1 = track:new(id, "Blew", 1, Album:id()).
{track,id,"Blew",1,id}
(beaterl@phoenix)5> Track1:save().
