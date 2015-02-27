$(document).ready(function() {

    App.container = $('#app');

    var exampleView = new App.views.example.Example();

    exampleView.render(App.container);

});
