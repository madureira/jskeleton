/**
 * Prototype responsible to make a ajax call to retrieve the message from server.
 *
 * @param fn context function
 *
 */
App.define('Example', 'models/example', (function(fn, undefined) {
    'use strict';

    /**
     * Imagine that this method retrieve the message from a server by making a ajax call.
     *
     * @return string message
     */
    fn.prototype.getMessage = function() {
        return 'Hello World :)';
    };

    return fn;

}));
