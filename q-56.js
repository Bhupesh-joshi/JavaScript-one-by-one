// Proxies aur Reflection

const target = {
    message: "Hello, world!"
};

const handler = {
    get: function(target, property) {
        // return property in target ? target[property] : `Property ${property} does not exist.`;
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.message);
console.log(proxy.nonExistentProp);
