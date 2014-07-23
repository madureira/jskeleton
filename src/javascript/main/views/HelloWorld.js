App.package('views');

App.views.HelloWorld = (function(fn, $, tmpl, undefined) {
    'use strict';

    var _id = "#message";

    fn.prototype.render = function($container) {
        console.log('Rendering Hello World View');

        $(_id).html(template({ message:'Hello World!!!' }));
    };

    // Private method
    function template(data) {
        return tmpl['example.helloworld'](data);
    }

    return fn;

})(function(){}, jQuery, HBSTemplates);
