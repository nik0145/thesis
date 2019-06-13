'use strict';

describe('schedule', function () {

    it('should automatically redirect to / when anonymous', function () {
        browser.get('/');
        expect(browser.getLocationAbsUrl()).toMatch('/');
    });
  
    it('change teacher', function () {
        browser.get('/');
        element(by.css('.fiosotr[0]')).click();
        element(by.css('.schedulesotr[0]')).click();
        var status = element(by.css('.schedulesotr[0]'));
         expect(status.getText()).toEqual('changeSotr');
    });
    it('change discipline', function () {
        browser.get('/');
        element(by.css('.discipline[0]')).click();
        element(by.css('.scheduleDiscipline[0]')).click();
        var status = element(by.css('.scheduleDiscipline[0]'));
         expect(status.getText()).toEqual('changeDiscipline');
    });

    it('change auditorium)', function () {
    element(by.css('.autocomplete[0]')).click();
    element(by.css('.autocomplete[0] > li[0]')).click();
    var status = element(by.css('.autocomplete[0]'));
     expect(status.getText()).toEqual('element');
        
          expect(statusOut.getText()).toEqual('changeAuditorium');
    });

});
