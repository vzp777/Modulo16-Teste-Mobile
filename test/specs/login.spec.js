const FormsPage = require('../screens/PageObjects');

describe('Teste em Android', () => {
  it('Acessar o menu Forms', async () => {
    await FormsPage.clickFormsMenu();
    expect(await FormsPage.textInput.isDisplayed())
  });

  it('Tela Form components', async () => {
    await FormsPage.setInputValue('Victor');
    expect(await FormsPage.textInput.isDisplayed())
    
    await FormsPage.clickDropdown();
    await FormsPage.selectDropdownOption('This app is awesome');
    await FormsPage.clickActiveButton();
  });

  });



