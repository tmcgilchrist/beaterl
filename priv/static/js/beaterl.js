window.App = Ember.Application.create();

// Router
App.Router.map(function() {
  this.resource('albums'); // '/#/albums'
});

App.AlbumsRoute = Ember.Route.extend({
    model: function() {
        return App.Album.find();
    }
});

// Controller
App.AlbumsController = Ember.ArrayController.extend();

// Models
App.Store = DS.Store.extend({
    revision: 11,
    adapter: 'DS.FixtureAdapter'
});

App.Album = DS.Model.extend({
    name: DS.attr('string'),
    artist: DS.attr('string')
});

App.Album.FIXTURES = [{
    id: 1,
    name: 'Bleach',
    artist: 'Nirvana'
},{
    id: 2,
    name: 'Ten',
    artist: 'Pearl Jam'
},{
    id: 3,
    name: 'Siamese Dream',
    artist: 'Smashing Pumpkins'
},{
    id: 4,
    name: 'Sleeping with ghosts',
    artist: 'Placebo'
},{
    id: 5,
    name: 'Ok Computer',
    artist: 'Radiohead'
},{
    id: 6,
    name: 'Dirty',
    artist: 'Sonic Youth'
},{
    id: 7,
    name: 'Definitely Maybe',
    artist: 'Oasis'
}];