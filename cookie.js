// create new cookie from given atugment
function setCookie(name, value, path, expiresDay) {
    if (name && value && path && expiresDay) {
        let now = new Date();
        now.setTime(now.getTime() + expiresDay * 24 * 60 * 60 * 1000);
        let expires = now.toUTCString();
        document.cookie = `${name}=${value};path=${path};expires=$${expires}`;
    } else {
        console.error("missing argument in setCookie() function");
    }
}

// get a cookie value from name of cookie
function getCookie(name) {
    let cookies = document.cookie.split(";");
    let cookie = undefined;

    cookies.some((c) => {
        if (c.includes(name)) {
            cookie = c.substring(c.indexOf("=") + 1);
            return true;
        }
    });

    return cookie;
}

// a function for delete cookie from given cookie name
function deleteCookie(name) {
    if (name) {
        let date = new Date();
        date.setTime(date.getTime() - 1 * 24 * 60 * 60 * 1000);
        let expiredDate = date.toUTCString();
        document.cookie = `${name}=value;path=/;expires=$${expiredDate}`;
    }
}

export { setCookie, getCookie, deleteCookie };
// By Mahdi Hazrati
