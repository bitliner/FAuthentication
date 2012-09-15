# FAuthentication


Node.js module to integrate quickly your Node app with Facebook oauth authentication



## How to use it

### 1. create your Facebook app on [Facebook Developers](https://developers.facebook.com/apps)

### 2. specify settings for FAuthentication (with settings of your Facebook app)

```js
/* import fauthentication */

var fauthentication=require('./../../lib/fauthetication.js')

/* set FAuthentication's options (parameters of Facebook app and callbacks) */

fauthentication.settings({
    client_id: 'your-app-id',
    client_secret: 'your-app-secret',
    redirect_uri: 'http://your-site-domain:your-port/fauthentication/getAccessToken',
    app: app,
    callback: function(accessToken){
        console.log('accessToken',accessToken);
        fauthentication.getUser(function(user){
            console.log('Facebook user data',user);
        })
    }
})
```


### 3. bind the urls of your application with FAuthentication's request handlers 

```js

/*  set FAuthentication's url*/

app.get('/fauthentication/authenticate',fauthentication.auth)
app.get('/fauthentication/getAccessToken',fauthentication.getAccessToken) /* this must be according to `redirect_uri` settings (see above) */

``` 


