# Cookie.js
The `work-with-cookie` module and a minial npm package contains several functions that make it easy to work with cookies in JavaScript.

#### Some of the functions included in this module are:
- **setCookie(`name`, `value`, `days`)**: Sets a cookie with the given name, value, and expiration time (in days).
- **getCookie(`name`)**: Retrieves the value of the cookie with the given name.
- **deleteCookie(`name`)**: Deletes the cookie with the given name.

## Usage
To use this module in your project, simply import the `cookie.js` file in your  main JavaScript file like this:

```javascript
import {setCookie, getCookie, deleteCookie} from "./cookie.js"
```

in html most be type of script is `module` for enable using import.
```html
<script type="module" src="index.js"></script>
```
## Example
in `React` firit install with npm:
`npm install work-with-cookie`
then import to your project and use it:

```jsx
import {setCookie, getCookie, DeleteCookie} from "work-with-cookie"

setCookie("theme", "dark", "/", 365")

```

## Wiki

## setCookie(`name`, `value`, `path`, `expiresDay`)
Create a new cookie with the given **name**, **value**, **path** and **expiration day**. The name and value parameters are mandatory, while path and expiresDay are optional. The expiresDay parameter specifies the number of days after which the cookie will expire.

Example:
```javascript
// create new cookie
setCookie('username', 'Mahdi Hazrati', '/', 7);
// get cookie value
console.log(getCookie("username"))
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
## deleteCookie(`name`)
Delete the cookie with the given name by setting its expiration date to a time in the past (one day ago). If the cookie does not exist, nothing happens.

Example:
```javascript
deleteCookie('username');
```

### License
This package is licensed under the MIT license.

### Contributing
If you find any issues or have suggestions for improving the code, feel free to open a pull request or submit an issue. Any contributions are welcome!
