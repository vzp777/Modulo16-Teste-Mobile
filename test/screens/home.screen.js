class HomeScreen {

    get #initialSkip() { return $('id:button_skip') }
  
    get enterStoreAdress() { return $('id:button_login_store') }
  
    async initial() {
      await this.#initialSkip.click()
    }
  
    async goToLogoin() {
      await this.enterStoreAdress.click()
    }
  
  }
  module.exports = new HomeScreen()