/**
 * Hello World View
 *
 * @author Madureira
 */
App.views.helloWorld = (function($, hbs, undefined) {
    'use strict';

    App.views.helloWorld = function() {
        console.log('This is the Hello World constructor');
    }

    App.views.helloWorld.prototype.render = function($container) {
        $container.append(this.sayHello());
    }

    App.views.helloWorld.prototype.sayHello = function() {
        return template({ message:'Hello World!!!' });
    }

    // Private method
    function template(data) {
        var tmpl = hbs['hello_world.tmpl'];
        return tmpl(data);
    }

    return App.views.helloWorld;

})(jQuery, Handlebars);
