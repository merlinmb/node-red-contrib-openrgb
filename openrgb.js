module.exports = function(RED) {
    function OpenRGBNode(config) {
        RED.nodes.createNode(this, config);

        const serverIP = config.serverIP;
        const serverPort = config.serverPort;
        const method = config.method;
        const deviceID = config.deviceID;
        const color = config.color;
        const effect = config.effect;
        const speed = config.speed;

        this.on('input', function(msg) {
            // Use the configured parameters or fall back to the input message
            const deviceIDToUse = deviceID || msg.payload.deviceID;
            const colorToUse = color || msg.payload.color;
            const effectToUse = effect || msg.payload.effect;
            const speedToUse = speed || msg.payload.speed;

            try {
                const client = require('net').Socket();
                client.connect(serverPort, serverIP, function() {
                    // Build and send the command based on the selected method
                    let command;
                    switch (method) {
                        case 'setColor':
                            command = buildSetColorCommand(deviceIDToUse, colorToUse, effectToUse);
                            break;
                        case 'setEffectSpeed':
                            command = buildSetEffectSpeedCommand(deviceIDToUse, speedToUse);
                            break;
                        // Add cases for other supported methods as needed

                        default:
                            console.error('Invalid method:', method);
                            return;
                    }

                    client.write(command);
                    client.end();
                });

                client.on('error', function(err) {
                    console.error('An error occurred:', err);
                });
            } catch (err) {
                console.error('An error occurred:', err);
            }
        });

        function buildSetColorCommand(deviceID, color, effect) {
            const command = {
                mode: effect ? 2 : 1, // 1 for static color, 2 for effect
                deviceType: 0x01, // 0x01 for keyboard, modify if needed
                zoneID: deviceID, // Modify if needed based on your OpenRGB device
                color: {
                    r: color[0],
                    g: color[1],
                    b: color[2]
                }
            };

            return JSON.stringify(command);
        }

        function buildSetEffectSpeedCommand(deviceID, speed) {
            const command = {
                mode: 2, // 2 for effect
                deviceType: 0x01, // 0x01 for keyboard, modify if needed
                zoneID: deviceID, // Modify if needed based on your OpenRGB device
                speed: speed
            };

            return JSON.stringify(command);
        }

        // Add additional helper functions for other supported methods as needed
    }

    RED.nodes.registerType('openrgb', OpenRGBNode);
};
