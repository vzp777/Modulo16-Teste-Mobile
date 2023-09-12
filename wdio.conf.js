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
    "appium:appPackage": "com.wdiodemoapp",
    "appium:appActivity": ".SplashActivity",
    "appium:appWaitActivity": ".MainActivity",
    "appium:app": path.join(process.cwd(), "/app/android/Android-NativeDemoApp-0.4.0.apk")
  }]
};
