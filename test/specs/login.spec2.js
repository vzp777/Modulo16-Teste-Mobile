const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");
// lojaebacqe@gmail.com

describe('Acessar painel admin', () => {

  let urlLoja = 'http://lojaebac.ebaconline.art.br/'
  let usuario = 'gerente'
  let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
  it('Deve fazer login com sucesso', async () => {
    await homeScreen.initial()
    await homeScreen.goToLogoin()
    await loginScreen.setStoresAdrres(urlLoja)
    await loginScreen.continue()
    await loginScreen.continueWithStoreCredentials()
    await loginScreen.login(usuario, senha)
    await loginScreen.goToTwoFactorAuth()
    await loginScreen.twoFactorLogin(senha)


    expect(await myStoreScreen.myStoreLogoDisplayed()).toBeTruthy()
    expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
  }).timeout(20000);
});
