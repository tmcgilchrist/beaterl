window.App = Ember.Application.create();

// Router
App.Router.map(function() {
    this.resource('albums', function() {
        this.resource('album', {path: '/:album_id'});
    });
});

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('albums');
    }
});

App.AlbumsRoute = Ember.Route.extend({
    model: function() {
        return App.Album.find();
    }
});

// Controller
App.AlbumsController = Ember.ArrayController.extend();

App.AlbumController = Ember.ObjectController.extend();

// Models
App.Store = DS.Store.extend({
    revision: 11,
    adapter: 'DS.FixtureAdapter'
});

App.Album = DS.Model.extend({
    name: DS.attr('string'),
    artist: DS.attr('string'),
    coverImage: DS.attr('string')
});

App.Album.FIXTURES = [{
    id: 1,
    name: 'Bleach',
    artist: 'Nirvana',
    coverImage: 'static/img/nirvana-bleach.jpg'
},{
    id: 2,
    name: 'Ten',
    artist: 'Pearl Jam',
    coverImage: 'static/img/pearl-jam-ten.jpg'
},{
    id: 3,
    name: 'Siamese Dream',
    artist: 'Smashing Pumpkins',
    coverImage: 'static/img/smashing-pumpkins-siamese-dream.jpg'
},{
    id: 4,
    name: 'Sleeping with ghosts',
    artist: 'Placebo',
    coverImage: 'static/img/placebo-sleeping-with-ghosts.jpg'
},{
    id: 5,
    name: 'Ok Computer',
    artist: 'Radiohead',
    coverImage: 'static/img/radiohead-ok-computer.jpg'
},{
    id: 6,
    name: 'Dirty',
    artist: 'Sonic Youth',
    coverImage: 'static/img/sonic-youth-dirty.jpg'
},{
    id: 7,
    name: 'Definitely Maybe',
    artist: 'Oasis',
    coverImage: 'static/img/oasis-definitely-maybe.jpg'
}];
