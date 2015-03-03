/**
 * Prototype responsible to render the hello world screen.
 *
 * @param fn context function
 * @param $ selector engine
 * @tmpl template engine
 *
 */
App.define('HelloWorld', 'views/example', (function(fn, $, tmpl, undefined) {
    'use strict';

    var VIEW_ID = "#message";

    /**
     * This method render the hello world view.
     *
     * @param $container selector
     *
     * @return void
     *
     */
    fn.prototype.render = function($container) {
        console.log('Rendering Hello World View');

        var model = new App.models.example.Example();

        var msg = model.getMessage();

        $(VIEW_ID).html(_template({ message: msg }));
    };

    // Private method
    function _template(data) {
        return tmpl['example.helloworld'](data);
    }

    return fn;

}));
