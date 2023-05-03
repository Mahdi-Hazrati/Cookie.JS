# Cookie.js
A simple JavaScript module with helper functions for working with **cookies**.

## Usage
To use this module in your project, simply include the Cookie.js file in your HTML like this:

```html
<script src="path/to/Cookie.js"></script>
```

Then, you can call the exported functions in your JavaScript code:

## setCookie(name, value, path, expiresDay)
Create a new cookie with the given **name**, **value**, **path** and **expiration day**. The name and value parameters are mandatory, while path and expiresDay are optional. The expiresDay parameter specifies the number of days after which the cookie will expire.

Example:
```javascript
setCookie('username', 'JohnDoe', '/', 7);
getCookie(name)
```
Retrieve the value of the cookie with the given name. It searches for the cookie in the list of all cookies stored on the document object. If the cookie is found, its value is returned. If not, undefined is returned.

Example:
```javascript
let username = getCookie('username');
if (username) {
    console.log(`Hello ${username}!`);
} else {
    console.log('Welcome!');
}
```
## delCookie(name)
Delete the cookie with the given name by setting its expiration date to a time in the past (one day ago). If the cookie does not exist, nothing happens.

Example:
```javascript
delCookie('username');
```

### License
This package is licensed under the MIT license.

### Contributing
If you find any issues or have suggestions for improving the code, feel free to open a pull request or submit an issue. Any contributions are welcome!
