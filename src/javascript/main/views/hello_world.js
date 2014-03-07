/**
 * Hello World View
 *
 * @author Madureira
 */
App.views.helloWorld = (function(fn, $, hbs, undefined) {
    'use strict';

    fn = function() {
        console.log('This is the Hello World constructor');
    }

    fn.prototype.render = function($container) {
        $container.append(template({ message:'Hello World!!!' }));
    }

    // Private method
    function template(data) {
        var tmpl = hbs['hello_world.tmpl'];
        return tmpl(data);
    }

    return fn;

})(function(){}, jQuery, Handlebars);
