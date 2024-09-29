//your JS code here. If required.

let obj = {
    browserName : navigator.appName,
    version : navigator.appVersion
}

let string = `You are using + ${obj.browserName} + version + ${obj.version}`;

let container = document.getElementById("browser-info");

container.append(string);
