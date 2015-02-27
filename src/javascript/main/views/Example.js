/**
 * Prototype responsible to render the Exemple screen.
 *
 * @param fn context function
 * @param $ selector engine
 * @param template engine
 *
 */
App.define('Example', 'views', (function(fn, $, tmpl, undefined) {
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

}));
