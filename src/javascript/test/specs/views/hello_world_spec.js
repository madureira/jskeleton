helloWorld = new App.views.helloWorld();

describe('helloWorld', function () {

    it('should say hello', function () {
        expect(helloWorld.sayHello()).toEqual(jasmine.any(String));
    });

    it('should append template to the container', function() {
        var $container = App.container;

        spyOn($container, 'append');

        helloWorld.render($container);

        expect($container.append).toHaveBeenCalledWith(jasmine.any(String));
    });

});
