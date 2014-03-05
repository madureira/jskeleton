App.current.config = {

    serviceDomain: 'http://localhost',

    port: '3000',

    getServiceUrl: function() {
        var url = this.serviceDomain;

        if (this.port !== undefined && this.port.trim() !== '') {
            url += ':' + this.port;
        }

        return url;
    }

};
