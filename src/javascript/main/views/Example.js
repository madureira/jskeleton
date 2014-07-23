App.package('views');

App.views.Example = (function(fn, $, tmpl, undefined) {
    'use strict';

    var _id = '#home';

    fn.prototype.render = function($container) {
        $container.append(exampleTemplate());
        $container.after(forkmeTemplate());

        bindEvents();
    };

    function bindEvents() {
        $(_id).find('button').click(function() {
            var helloView = new App.views.HelloWorld();
            helloView.render();
        });
    }

    function exampleTemplate() {
        return tmpl['example.example']();
    }

    function forkmeTemplate() {
        return tmpl['example.forkme']();
    }

    return fn;

})(function(){}, jQuery, HBSTemplates);
