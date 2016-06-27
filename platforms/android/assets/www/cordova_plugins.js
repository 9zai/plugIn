cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.geneanet.customCamera/www/customCamera.js",
        "id": "org.geneanet.customCamera.GeneanetCustomCamera",
        "clobbers": [
            "navigator.GeneanetCustomCamera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "org.geneanet.customCamera": "0.2.0",
    "cordova-plugin-console": "1.0.3",
    "cordova-plugin-device": "1.1.2"
}
// BOTTOM OF METADATA
});