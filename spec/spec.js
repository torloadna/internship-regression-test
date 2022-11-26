let homepage = require('../../internship-automation-test/pageobjects/homepage');
let createNewAccount = require('../../internship-automation-test/pageobjects/createnewaccount');
let gear = require('../../internship-automation-test/pageobjects/gear');
let logout = require('../../internship-automation-test/pageobjects/logout');

describe('regression tests', function() {

  beforeEach(function() {
      browser.waitForAngularEnabled(false);
      homepage.get('https://magento.softwaretestingboard.com/');
      browser.manage().window().maximize();
  });
  getRandomString = function(length) {
    var string = '';
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' 
            for (i = 0; i < length; i++) {
                string += letters.charAt(Math.floor(Math.random() * letters.length));
            }
            return string;
  }

  //nav bar suite
  it('TC001', function() {
    homepage.clickWomen();
    browser.sleep(3000);
    expect(browser.getTitle()).toBe("Women Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites");
  });
  it('TC002', function() {
    homepage.clickWhatsNew();
    browser.sleep(3000);
    expect(browser.getTitle()).toBe("What's New Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites");
  });
  it('TC003', function() {
    homepage.clickMen();
    browser.sleep(3000);
    expect(browser.getTitle()).toBe("Men Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites");
  });
  it('TC004', function() {
    homepage.clickGear();
    browser.sleep(3000);
    expect(browser.getTitle()).toBe("Gear Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites");
  });
  it('TC005', function() {
    homepage.clickTraining();
    browser.sleep(3000);
    expect(browser.getTitle()).toBe("Training Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites");
  });
  it('TC006', function() {
    homepage.clickSale();
    browser.sleep(3000);
    expect(browser.getTitle()).toBe("Sale Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites");
  });

  //create account suite
  it('TC007',function(){
    homepage.clickCreateAnAccount();
    createNewAccount.enterFirstName("Adna");
    createNewAccount.enterLastName("Torlo");
    createNewAccount.enterEmail("adnatorlo@"+getRandomString(5)+".com");
    createNewAccount.enterPassword("AdnaTorlo123!");
    createNewAccount.enterPasswordConfirmation("AdnaTorlo123!");
    createNewAccount.clickCreateAndAccountButton();
    browser.sleep(3000);
    expect((element(by.xpath('//div[@data-bind="html: $parent.prepareMessageForHtml(message.text)"]'))).getText()).toBe("Thank you for registering with Fake Online Clothing Store.");
    logout.clickButton();
    logout.clickSignOutButton();
    browser.sleep(2000);
  });
  it('TC008',function(){
    homepage.clickCreateAnAccount();
    createNewAccount.enterFirstName("123");
    createNewAccount.enterLastName("Torlo");
    createNewAccount.enterEmail("adnatorlo@"+getRandomString(5)+".com");
    createNewAccount.enterPassword("AdnaTorlo123!");
    createNewAccount.enterPasswordConfirmation("AdnaTorlo123!");
    createNewAccount.clickCreateAndAccountButton();
    browser.sleep(5000);
    expect((element(by.xpath('//div[@data-bind="html: $parent.prepareMessageForHtml(message.text)"]'))).getText()).not.toBe("Thank you for registering with Fake Online Clothing Store.");
    browser.sleep(3000);
    logout.clickButton();
    logout.clickSignOutButton();
    browser.sleep(2000);
  });
  it('TC009',function(){
    homepage.clickCreateAnAccount();
    createNewAccount.enterFirstName("Adna");
    createNewAccount.enterLastName("123");
    createNewAccount.enterEmail("adnatorlo@"+getRandomString(5)+".com");
    createNewAccount.enterPassword("AdnaTorlo123!");
    createNewAccount.enterPasswordConfirmation("AdnaTorlo123!");
    createNewAccount.clickCreateAndAccountButton();
    browser.sleep(5000);
    expect((element(by.xpath('//div[@data-bind="html: $parent.prepareMessageForHtml(message.text)"]'))).getText()).not.toBe("Thank you for registering with Fake Online Clothing Store.");
    browser.sleep(3000);
    logout.clickButton();
    logout.clickSignOutButton();
    browser.sleep(2000);
  });
  it('TC010',function(){
    homepage.clickCreateAnAccount();
    createNewAccount.enterFirstName("Adna");
    createNewAccount.enterLastName("Torlo");
    createNewAccount.enterEmail("adnatorlo123");
    createNewAccount.enterPassword("AdnaTorlo123!");
    createNewAccount.enterPasswordConfirmation("AdnaTorlo123!");
    createNewAccount.clickCreateAndAccountButton();
    browser.sleep(4000);
    expect((element(by.xpath('//div[@id="email_address-error"]'))).getText()).toBe("Please enter a valid email address (Ex: johndoe@domain.com).");
    browser.sleep(3000);
  });
  it('TC011',function(){
    homepage.clickCreateAnAccount();
    createNewAccount.enterFirstName("Adna");
    createNewAccount.enterLastName("Torlo");
    createNewAccount.enterEmail("adnatorlo@"+getRandomString(5)+".com");
    createNewAccount.enterPassword("adna");
    createNewAccount.enterPasswordConfirmation("adna");
    createNewAccount.clickCreateAndAccountButton();
    browser.sleep(6000);
    expect((element(by.id('password-error'))).getText()).toBe("Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.");
  });

  //pictures suite
  it('TC012',function(){
    homepage.clickGear();
    gear.clickPicture1();
    expect(browser.getTitle()).not.toBe("Gear Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites");
  });
  it('TC013',function(){
    homepage.clickGear();
    browser.sleep(3000);
    gear.clickPicture2();
    browser.sleep(4000);
    expect(browser.getTitle()).not.toBe("Gear Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites");
  });
  it('TC014',function(){
    homepage.clickGear();
    browser.sleep(3000);
    gear.clickPicture3();
    browser.sleep(4000);
    expect((element.all(by.xpath("//span[contains(text(),'$7.00')]"))).getText()).toBe("$4.00");
  });
  it('TC015',function(){
    homepage.clickGear();
    browser.sleep(3000);
    gear.clickPicture4();
    browser.sleep(4000);
    expect(browser.getTitle()).not.toBe("Gear Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites");
  });
  it('TC016',function(){
    homepage.clickGear();
    browser.sleep(3000);
    gear.clickPicture5();
    browser.sleep(4000);
    expect(browser.getTitle()).not.toBe("Gear Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites");
  });
  it('TC017',function(){
    homepage.clickGear();
    browser.sleep(3000);
    gear.clickPicture6();
    browser.sleep(4000);
    expect(browser.getTitle()).not.toBe("Gear Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites");
  });
});

