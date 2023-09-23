const path = require('path');

exports.config = {
  hostname: 'localhost',
  port: 4723,
  path: '/wd/hub',
  specs: ['./test/specs/**/*.js'],
  framework: 'mocha',
  capabilities: [{
    "appium:platformName": "Android",
    "appium:platformVersion": "9.0",
    "appium:deviceName": "Ebac-Qe",
    "appium:automationName": "UiAutomator2",
    "appium:app": path.join(process.cwd(), "/app/android/Loja-ebac.apk"),
   "appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"
   
  }]
};
