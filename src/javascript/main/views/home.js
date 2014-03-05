/**
 * Home View
 *
 * @author Madureira
 */
App.views.home = (function($, hbs, undefined) {
    'use strict';

    App.views.home = function() {
        console.log('This is the Home constructor');
    }

    App.views.home.prototype.render = function($container) {
        $container.append(this.sayHello());
    }

    App.views.home.prototype.sayHello = function() {
        return message();
    }

    // Private methods
    function message() {
        return template({ message:'Hello World!!!' });
    }

    function template(data) {
        var tmpl = hbs['home.tmpl'];
        return tmpl(data);
    }

    return App.views.home;

})(jQuery, Handlebars);
