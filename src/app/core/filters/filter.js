'use strict';

export default function (app) {

  app.filter('excludeFrom', function() {
    return function(array, comp) {
      if (!array) {
        return;
      }
      return array.filter(item => item.ccy !== comp.ccy);
    };
  });
}