const path = require('path');
const allure = require('allure-commandline')

exports.config = {
  hostname: 'localhost',
  port: 4723,
  path: '/wd/hub',
  specs: ['./test/specs/**/*.js'],
  framework: 'mocha',
  capabilities: [{
    "platformName": "Android",
    "appium:platformVersion": "9.0",
    "appium:deviceName": "Ebac-Qe",
    "appium:automationName": "UiAutomator2",
    "appium:appWaitActivity": ".MainActivity",
    "appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity",
   "appium:app": path.join(process.cwd(), "/app/android/Loja-ebac.apk")
   }],

   waitForTimeout: 30000,
   mocha0pts: {
    timeout: 300000

   },
    reporters: ['spec', 
      ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
  }]
],
    onComplete: function() {
      const reportError = new Error('Could not generate Allure report')
      const generation = allure(['generate', 'allure-results', '--clean'])
      return new Promise((resolve, reject) => {
          const generationTimeout = setTimeout(
              () => reject(reportError),
              5000)

          generation.on('exit', function(exitCode) {
              clearTimeout(generationTimeout)

              if (exitCode !== 0) {
                  return reject(reportError)
              }

              console.log('Allure report successfully generated')
              resolve()
          })
      })

},
afterTest: async function(test, context, { error, result, duration, passed, retries }) {
  if (error) {
      driver.takeScreenshot();
  }
}

}
