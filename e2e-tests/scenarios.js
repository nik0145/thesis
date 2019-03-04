'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function () {

    it('should automatically redirect to / when anonymous', function () {
        browser.get('/');
        expect(browser.getLocationAbsUrl()).toMatch('/');
    });

    //describe('login ok', function () {
    it('вход пользователем  должен быть успешен', function () {

        browser.get('/');

        element(by.css('#signUpNavBar')).click();
        element(by.model('userName')).clear().sendKeys('admin');
        element(by.model('passwordName')).clear().sendKeys('admin');
        element(by.css('#signUp')).click();
        var status = element(by.css('.statusSingUp'));
         expect(status.getText()).toEqual('Вы вошли как "admin".');

    });

    it('выход должен привести пользователя на ту же страницу)', function () {
        element(by.css("#signOutNavBar")).click();
        var statusOut = element(by.css('#signUpNavBar'));
        
          expect(statusOut.getText()).toEqual('ВОЙТИ');
    });

});
