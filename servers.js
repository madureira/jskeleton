var express = require('express');
var app = express();

// Application config.
app.configure(function(){
    app.use(express.static(__dirname + '/public'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

// Access log.
app.use(function(req, res, next){
    console.log('[%s]  %s %s', (new Date()), req.method, req.url);
    next();
});

// Enable Cross-Domain to any uri.
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(3000);

console.log('Server running at http://localhost:3000');


//#############################################################################################
////#######################               Services            ###################################
////#############################################################################################
