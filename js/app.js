/**
 * Let's create the dashboard view.
**/
var DashboardView = Backbone.View.extend({
  template: Handlebars.compile( $("#dashboard-view-template").html() ),
  initialize: function () {
      this.render();
  },
  render: function () {
      this.$el.html(this.template({greeting:"Hello world."}));
  }
});

var AppRouter = Backbone.Router.extend({
  routes: {
      '': 'dashboardRoute',
  },
  dashboardRoute: function () {
      var dashboardView = new DashboardView();
      $("#content-container").html(dashboardView.el);
  },
});

var appRouter = new AppRouter();
Backbone.history.start();

/*
function saveToFirebase(name, position) {
    var playerObject = {
        name: name,
        position: position
    };

    firebase.database().ref('players').push().set(playerObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

saveToFirebase(name, position);
*/
