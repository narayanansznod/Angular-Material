import { browser, by, element } from 'protractor';

export class IsgNgxInterviewOnePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('isg-root h1')).getText();
  }
}
