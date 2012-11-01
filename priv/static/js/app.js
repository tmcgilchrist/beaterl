window.App = Ember.Application.create({

  ApplicationView: Ember.View.extend({
    templateName: 'application',
    classNames: ['application-view']
  }),
  ApplicationController: Ember.Controller.extend({
    slogan: 'A framework for creating ambitious web applications',
    isSlogan: true
  }),
  CarsView: Em.View.extend({
    templateName: 'cars'
  }),
  CarsController: Em.ArrayController.extend(),
  ShoesView: Em.View.extend({
    templateName: 'shoes'
  }),
  ShoesController: Em.ArrayController.extend(),
  SalutationView: Em.View.extend({
    templateName: 'salutation'
  }),
  ShoeView: Em.View.extend({
    templateName: 'shoe'
  }),
  ShoeController: Em.ObjectController.extend(),
  SalutationController: Em.ObjectController.extend(),
  TraversalView: Em.View.extend({
    templateName: 'traversal'
  }),
  TraversalController: Em.ObjectController.extend(),
  HomeView: Em.View.extend({
    template: Em.Handlebars.compile('<p><a {{action goHome href=true}}><em>Go Home</em></a></p>')
  }),
  HomeController: Em.ObjectController.extend(),
  ready: function() {
    console.log("Created App namespace");
  },
  Router: Ember.Router.extend({
    enableLogging: true,
    goToCars: Ember.Route.transitionTo('cars'),
    goToShoes: Ember.Route.transitionTo('shoes.index'),
    goToHome: Ember.Route.transitionTo('index'),
    root: Ember.Route.extend({
      index: Ember.Route.extend({
        route: '/',
        connectOutlets: function(router, context) {
          router.get('applicationController').connectOutlet('greeting', 'salutation',
                                                           {greeting: "My Ember App"});
          router.get('applicationController').connectOutlet('body', 'traversal');
        }
      }),
      shoes: Ember.Route.extend({
        showShoe:  Em.Route.transitionTo('shoes.shoe'),
        route: '/shoes',
        index: Ember.Route.extend({
          route: '/',
          enter: function(router) {
            console.log("The shoes sub-state was entered.");
          },
          connectOutlets: function(router, context) {
            router.get('applicationController').connectOutlet('greeting', 'salutation',
                                                              {greeting: "Shoes Route"});
            router.get('applicationController').connectOutlet('body', 'shoes', App.Shoe.all());
            router.get('applicationController').connectOutlet('footer', 'traversal');
            router.get('traversalController').connectOutlet('home');
          }
        }),
        shoe:  Ember.Route.extend({
          route: '/shoe/:id',
          enter: function ( router ){
            console.log("The shoe detail sub-state was entered.");
          },
          deserialize:  function(router, context){
            return App.Shoe.find( context.id );
          },
          serialize:  function(router, context){
            return {
              id: context.id
            }
          },
          connectOutlets:  function(router, aShoe){
            router.get('applicationController').connectOutlet('greeting', 'salutation',
                                                              { greeting: "Shoes.Shoe Route" });
            router.get('applicationController').connectOutlet('body', 'shoe', aShoe);
            router.get('applicationController').connectOutlet('footer', 'traversal');
          }
        })
      }),
      cars: Ember.Route.extend({
        route: '/cars',
        enter: function(router) {
          console.log("The cars sub-state was entered.");
        },
        connectOutlets: function(router, context) {
          router.get('applicationController').connectOutlet('greeting', 'salutation',
                                                           {greeting: "Cars Route"});
          router.get('applicationController').connectOutlet('body', 'cars');
          router.get('applicationController').connectOutlet('footer', 'traversal');
          router.get('traversalController').connectOutlet('home');
        }
      })
    })
  })
});
App.Shoe = Ember.Object.extend();
App.Shoe.reopenClass({
  _listOfShoes:  Em.A(),
  all:  function(){
    var allShoes = this._listOfShoes;
    // Mock an ajax call; like a jQuery.ajax might have done...
    setTimeout( function(){
      allShoes.clear();
      allShoes.pushObjects(
        [
          { id: 'rainbow',   name: "Rainbow Sandals",
              price: '$60.00', description: 'San Clemente style' },
          { id: 'strappy',   name: "Strappy shoes",
              price: '$300.00', description: 'I heard Pénèlope Cruz say this word once.' },
          { id: 'bluesuede', name: "Blue Suede",
              price: '$125.00', description: 'The King would never lie:  TKOB⚡!' }
        ]
      );
    }, 2000);
    return this._listOfShoes;
  }
});
App.initialize();
