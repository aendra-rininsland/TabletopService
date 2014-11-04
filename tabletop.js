/**
 * @ngdoc service
 * @name Tabletop.TabletopService
 * @description
 * # Tabletop
 * Service providing data from Google Sheets via Tabletop.js
 */

/*global Tabletop,angular*/
angular.module('Tabletop', [])
  .service('TabletopService', ['$q', function TabletopService($q) {
    'use strict';

    this.initialized = $q.when();
    this.data = {};

    this.init = function(key, simple) {
      simple = typeof simple === 'undefined' ? false : simple;
      key = typeof key === 'undefined' ? false : key;
      Tabletop.init({
        key: key,
        simplesheet: simple,
        callback: function(res) {
          this.data = res;
        }
      });

      return this.initialized;
    };
  }]);
