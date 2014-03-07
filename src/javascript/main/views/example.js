/**
 * Example View
 *
 * @author Madureira
 */
App.views.example = (function(fn, $, hbs, undefined) {
    'use strict';

    var _id = '#home';

    fn.prototype.render = function($container) {
        $container.append(exampleTemplate());
        $container.after(forkmeTemplate());

        bindEvents();
    };

    function bindEvents() {
        $(_id).find('button').click(function() {
            alert('teste');
        });
    }

    function exampleTemplate() {
        var tmpl = hbs['example.tmpl'];
        return tmpl();
    }

    function forkmeTemplate() {
        var tmpl = hbs['forkme.tmpl'];
        return tmpl();
    }

    return fn;

})(function(){}, jQuery, Handlebars);
