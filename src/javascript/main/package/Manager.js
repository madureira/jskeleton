// Defines the namespace container
var App = App || {};

/**
 * This function is responsible to generate the namespace dynamically.
 *
 * @author Madureira
 *
 * @param string namespace]
 *
 * @return void
 */
App.package = App.package || function(namespace) {

    /**
     * Generates an object based on array.
     * # Example
     *     Given: array([0] => 'a', [1] => 'b')
     *     Return: Object({ a: { b: {} } });
     *
     * @author Madureira
     *
     * @param array list
     *
     * @return object
     */
    function generatesObjectByArray(list) {
        var namespaceTree = {};

        list.reverse();

        for (var i=0; list.length > i; i++) {
            var tmp = {};
            tmp[list[i]] = namespaceTree;
            namespaceTree = tmp;
        }

        return namespaceTree;
    }

    /**
     * Creates a namespace or merge if it exist on namespace container tree.
     *
     * @param object namespace
     * @param object context
     *
     * @return object
     */
    function createNamespace(namespace, context) {
        return App.Helpful.mergeObjects(namespace, context);
    }


    var namespaceList = namespace.split('.');
    var newNamespaceObject = generatesObjectByArray(namespaceList);

    App = createNamespace(newNamespaceObject, App);

};
