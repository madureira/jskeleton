helloWorld = new App.views.helloWorld();

describe("helloWorld", function () {
    it("should say hello", function () {
        var template = "<h1>Hello World!!!</h1>\n";

        expect(helloWorld.sayHello()).toBe(template);
    });
});
