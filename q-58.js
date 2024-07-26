// Reflection

const handler = {
    get: function(target, property) {
        console.log(`Getting property ${property}`);
        return Reflect.get(target, property);
    },
    set: function(target, property, value) {
        console.log(`Setting property ${property} to ${value}`);
        return Reflect.set(target, property, value);
    }
};

const proxy = new Proxy(target, handler);

proxy.message = "Hi there!";
console.log(proxy.message);
