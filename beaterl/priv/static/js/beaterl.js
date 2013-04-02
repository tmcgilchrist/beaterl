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

App.AlbumController = Ember.ObjectController.extend({
    isEditing: false,

    doneEditing: function() {
        this.set('isEditing', false);
    },
    edit: function() {
        this.set('isEditing', true);
    },
    play: function() {
        console.log("playing: " + tmodel.name);
    }
});

App.PlayerController = Ember.ObjectController.extend();

// Views
App.PlayerView = Ember.View.extend({
    templateName: 'player-view'
});

// Models
App.Store = DS.Store.extend({
    revision: 11,
    adapter: 'DS.FixtureAdapter'
});

App.Album = DS.Model.extend({
    name: DS.attr('string'),
    artist: DS.attr('string'),
    coverImage: DS.attr('string'),
    year: DS.attr('date'),
    tracks: DS.hasMany('App.Track')
});

App.Track = DS.Model.extend({
    name: DS.attr('string'),
    order: DS.attr('number')
});

App.Album.FIXTURES = [{
    id: 1,
    name: 'Bleach',
    artist: 'Nirvana',
    coverImage: 'static/img/nirvana-bleach.jpg',
    tracks: [1,2,3,4,5,6,7,8,9,10,11,12,13]
},{
    id: 2,
    name: 'Ten',
    artist: 'Pearl Jam',
    coverImage: 'static/img/pearl-jam-ten.jpg',
    tracks: []
},{
    id: 3,
    name: 'Siamese Dream',
    artist: 'Smashing Pumpkins',
    coverImage: 'static/img/smashing-pumpkins-siamese-dream.jpg',
    tracks: []
},{
    id: 4,
    name: 'Sleeping with ghosts',
    artist: 'Placebo',
    coverImage: 'static/img/placebo-sleeping-with-ghosts.jpg',
    tracks: []
},{
    id: 5,
    name: 'Ok Computer',
    artist: 'Radiohead',
    coverImage: 'static/img/radiohead-ok-computer.jpg',
    tracks: []
},{
    id: 6,
    name: 'Dirty',
    artist: 'Sonic Youth',
    coverImage: 'static/img/sonic-youth-dirty.jpg',
    tracks: []
},{
    id: 7,
    name: 'Definitely Maybe',
    artist: 'Oasis',
    coverImage: 'static/img/oasis-definitely-maybe.jpg',
    tracks: []
}];


App.Track.FIXTURES = [{
    id: 1,
    name: 'Blew',
    order: 1,
    album: 1
}, {
    id: 2,
    name: 'Floyd The Barber',
    order: 2,
    album: 1
}, {
    id: 3,
    name: 'About A Girl',
    order: 3,
    album: 1
}, {
    id: 4,
    name: 'School',
    order: 4,
    album: 1
}, {
    id: 5,
    name: 'Love Buzz',
    order: 5,
    album: 1
}, {
    id: 6,
    name: 'Paper Cuts',
    order: 6,
    album: 1
}, {
    id: 7,
    name: 'Negative Creep',
    order: 7,
    album: 1
}, {
    id: 8,
    name: 'Scoff',
    order: 8,
    album: 1
}, {
    id: 9,
    name: 'Swap Meet',
    order: 10,
    album: 1
} , {
    id: 10,
    name: 'Mr Moustache',
    order: 11,
    album: 1
}, {
    id: 11,
    name: 'Sifting',
    order: 11,
    album: 1
}, {
    id: 12,
    name: 'Big Cheese',
    order: 12,
    album: 1
}, {
    id: 13,
    name: 'Downer',
    order: 13,
    album: 1
}];
