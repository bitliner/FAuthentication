# FAuthentication


Node.js module to integrate quickly your Node app with Facebook OAuth authentication



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

        console.log('now you have access token',accessToken);
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

### 3. In your login page insert a button to login and corresponding javascript function to open Facebook dialog box


```html

...
<body>
	<script type="text/javascript">
		var login=function(){
			window.open('/fauthentication/authenticate?next=/', 'Facebook Login', 'width=300px, height=300');
		}
	</script>
	<button onclick="login()">Facebook Login</button>		
</body>
...

``` 

## Try with examples

```
git clone git@github.com:bitliner/FAuthentication.git fauthentication

cd fauthentication/examples/fauthentication-with-express

npm install

node app.js

// now in your browser go to http://localhost:3000/ 

``` 

