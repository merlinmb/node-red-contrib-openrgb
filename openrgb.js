module.exports = function (RED) {
    function OpenRGBNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.serverIP = config.serverIP;
        node.serverPort = config.serverPort;
        node.method = config.method;
        node.deviceID = config.deviceID;
        node.color = config.color;
        node.effect = config.effect;
        node.speed = config.speed;

        node.on('input', function (msg) {
            // Get the values from the node's config or the input message (if available)
            var serverIP = node.serverIP || msg.serverIP;
            var serverPort = node.serverPort || msg.serverPort;
            var method = node.method || msg.method;
            var deviceID = node.deviceID || msg.deviceID;
            var color = node.color || msg.color;
            var effect = node.effect || msg.effect;
            var speed = node.speed || msg.speed;

            // Perform the OpenRGB SDK action based on the configured method
            // Replace the following code with your OpenRGB SDK implementation
            if (method === 'setColor') {
                console.log(`Setting color to ${color} for device ${deviceID}`);
            } else if (method === 'setEffectSpeed') {
                console.log(`Setting effect speed to ${speed} for device ${deviceID}`);
            }

            // You can also output the results or pass along the input message
            // if needed using `node.send(msg);`
        });
    }
    RED.nodes.registerType('openrgb', OpenRGBNode);
};
