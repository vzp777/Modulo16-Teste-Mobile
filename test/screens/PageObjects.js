class FormsPage {
    get formsMenu() {
      return $('~Forms');
    }
  
    get textInput() {
      return $('~text-input');
    }
  
    get dropdown() {
      return $('~Dropdown');
    }
  
    get buttonActive() {
      return $('~button-Active');
    }
  
    get parentPanel() {
      return $("~parentPanel");
    }
  
    async clickFormsMenu() {
      await this.formsMenu.click();
    }
  
    async setInputValue(value) {
      await this.textInput.setValue(value);
    }
  
    async clickDropdown() {
      await this.dropdown.click();
    }
  
    async selectDropdownOption(optionText) {
      const selector = `new UiSelector().text("${optionText}").className("android.widget.CheckedTextView")`;
      const button = await $(`android=${selector}`);
      await button.click();
    }
  
    async clickActiveButton() {
      await this.buttonActive.click();
    }
  
  }
  
  module.exports = new FormsPage();