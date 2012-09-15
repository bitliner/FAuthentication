
var express = require('express')
,   routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});



// Routes

app.get('/', function(req,res){
    res.sendfile('index.html')
})

/******************************************/
/*  fauthentiatation's integration below */
/*****************************************/

/* import fauthentication */

var fauthentication=require('./../../lib/fauthetication.js')

/* set FAuthentication's options (parameters of Facebook app and callbacks) */

fauthentication.settings({
    client_id: '194622933989729',
    client_secret: '44db9515168f6c2d3ba9f7689a65d47e',
    redirect_uri: 'http://localhost:3000/fauthentication/getAccessToken',
    app: app,
    callback: function(accessToken){
        console.log('accessToken',accessToken);
        fauthentication.getUser(function(user){
            console.log('Facebook user data',user);
        })
    }
})

/*  set FAuthentication's url*/
app.get('/fauthentication/authenticate',fauthentication.auth)
app.get('/fauthentication/getAccessToken',fauthentication.getAccessToken)


app.listen(3000, function(){
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});