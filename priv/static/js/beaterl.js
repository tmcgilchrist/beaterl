window.App = Ember.Application.create({

  ApplicationView: Ember.View.extend({
    templateName: 'application',
    classNames: ['application-view']
  }),
  ApplicationController: Ember.Controller.extend({
  }),

  LibraryView: Em.View.extend({
    templateName: 'library'
  }),
  LibraryController: Em.ArrayController.extend(),

  MainView: Em.View.extend({
    templateName: 'main'
  }),
  MainController: Em.Controller.extend(),
  Router: Ember.Router.extend({
    enableLogging: true,
    root: Ember.Route.extend({
      index: Ember.Route.extend({
        route: '/',
        connectOutlets: function(router, context) {
          router.get('applicationController').connectOutlet('main', 'main');
          router.get('applicationController').connectOutlet('library', 'library');
        }
      })
    })
  })
});


App.Albums = Ember.Object.extend();

App.initialize();
