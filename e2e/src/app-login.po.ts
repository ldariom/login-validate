import { browser, by, element } from 'protractor';

export class AppLoginPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle() {
    return element(by.css('.ion-text-center')).getText();
  }
}
