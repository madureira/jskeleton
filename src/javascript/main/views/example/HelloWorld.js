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

    var _id = "#message";

    fn.prototype.render = function($container) {
        console.log('Rendering Hello World View');

        var model = new App.models.example.Example();

        var msg = model.getMessage();

        $(_id).html(template({ message: msg }));
    };

    // Private method
    function template(data) {
        return tmpl['example.helloworld'](data);
    }

    return fn;

}));
