$(document).ready(function() {

    App.container = $('#app');

    var homeView = new App.views.home();

    homeView.render(App.container);

});
