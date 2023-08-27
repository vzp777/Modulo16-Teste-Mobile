const path = require('path');

exports.config = {
  hostname: 'localhost',
  port: 4723,
  path: '/wd/hub',
  specs: ['./test/specs/**/*.js'],
  framework: 'mocha',
  capabilities: [{
    platformName: "Android",
    platformVersion: "9.0",
    deviceName: "Ebac-Qe",
    automationName: "UiAutomator2",
    appPackage: "com.woocommerce.android",
    appActivity: ".ui.main.MainActivity",
    appWaitActivity: "com.woocommerce.android.ui.login.LoginActivity",
    appWaitDuration: "5000",
    app: path.join(process.cwd(), "app/Android-NativeDemoApp-0.4.0.apk")
  }]
};
