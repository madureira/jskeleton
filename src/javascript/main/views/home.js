/**
 * Home View
 *
 * @author Madureira
 */
App.views.home = (function(fn, $, hbs, undefined) {
    'use strict';

    var _id = '#home';

    fn.prototype.render = function($container) {
        $container.append(homeTemplate());
        $container.after(forkmeTemplate());

        bindEvents();
    };

    function bindEvents() {
        $(_id).find('button').click(function() {
            alert('teste');
        });
    }

    function homeTemplate() {
        var tmpl = hbs['home.tmpl'];
        return tmpl();
    }

    function forkmeTemplate() {
        var tmpl = hbs['forkme.tmpl'];
        return tmpl();
    }

    return fn;

})(function(){}, jQuery, Handlebars);
