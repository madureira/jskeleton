/**
 * Prototype responsible to render the Exemple screen.
 *
 * @param fn context function
 * @param $ selector engine
 * @param template engine
 *
 */
App.define('Example', 'views/example', (function(fn, $, tmpl, undefined) {
    'use strict';

    var HOME_ID = '#home';

    /**
     * This method render the example screen.
     *
     * @param $container selector
     *
     * @retunr void
     *
     */
    fn.prototype.render = function($container) {
        $container.append(_exampleTemplate());
        $container.after(_forkmeTemplate());

        _bindEvents();
    };

    function _bindEvents() {
        $(HOME_ID).find('button').click(function() {
            var helloView = new App.views.example.HelloWorld();
            helloView.render();
        });
    }

    function _exampleTemplate() {
        return tmpl['example.example']();
    }

    function _forkmeTemplate() {
        return tmpl['example.forkme']();
    }

    return fn;

}));
