# FAuthentication


Node.js module to integrate quickly your Node app with Facebook oauth authentication



## How to use it

3 steps:

### 1. create your Facebook app on [Facebook Developers](https://developers.facebook.com/apps)

### 2. specify settings for FAuthentication (with settings of your Facebook app)

```js
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
```


### 3. bind the urls of your application with FAuthentication's request handlers  
