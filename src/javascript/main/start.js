$(document).ready(function() {

    App.container = $('#app');

    var helloWorldView = new App.views.helloWorld();

    helloWorldView.render(App.container);

});
