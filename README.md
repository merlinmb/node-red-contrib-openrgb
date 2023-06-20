# Node-RED OpenRGB Node

Custom Node-RED node for OpenRGB integration.

This Node-RED node allows you to control RGB lights through OpenRGB server using the OpenRGB SDK. You can configure the server IP and port, choose the desired method (e.g., setColor, setEffectSpeed), specify the device ID, color, effect, and speed.

## Prerequisites

- Node-RED installed and running.
- OpenRGB SDK library installed.
- OpenRGB server running and accessible from the Node-RED environment.

## Installation

1. Go to your Node-RED installation directory.
2. Run the following command to install the OpenRGB Node-RED node:

   ```shell
   npm install node-red-contrib-openrgb

Restart Node-RED to load the new node.

Usage

Drag and drop the "OpenRGB" node from the palette onto your Node-RED workspace.
Configure the node by setting the desired parameters:
  Server IP: IP address of the OpenRGB server.
  Server Port: Port number used by the OpenRGB server (default: 6742).
  Method: The OpenRGB SDK method to execute (e.g., setColor, setEffectSpeed).
  Device ID: ID of the device you want to control.
  Color: Color value in hexadecimal format (e.g., #FF0000 for red).
  Effect: Whether to apply an effect (true/false).
  Speed: Speed value for the effect (if applicable).

Connect the input to the OpenRGB node to trigger the desired action.
Deploy the flow.

Examples
  Set Color Example
    This example demonstrates how to set the color of an RGB device using the OpenRGB node.

Configure the OpenRGB node:
  Method: setColor
  Device ID: ID of the target RGB device
  Color: Desired color in hexadecimal format (e.g., #00FF00 for green)

  Deploy the flow and observe the RGB device changing to the specified color.

Set Effect Speed Example
  This example demonstrates how to set the effect speed of an RGB device using the OpenRGB node.

Configure the OpenRGB node:

Method: setEffectSpeed
  Device ID: ID of the target RGB device
  Speed: Desired effect speed (e.g., 10)
  
  Deploy the flow and observe the effect speed of the RGB device adjusting accordingly.




License
This project is licensed under the MIT License.
