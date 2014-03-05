App.current.config = {

    serviceDomain: 'http://localhost',

    port: '3000',

    getServiceUrl: function() {
        var domain = this.serviceDomain;
        var port = this.port;

        var url = '';

        if (port != '') {
            url = domain + ':' + port;
        }

        return url;
    }

}
