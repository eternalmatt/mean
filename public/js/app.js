'use strict';

window.app = angular.module('passport', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngRightClick',
  'ui.bootstrap',
  'ui.route',
  'passport.system',
  'passport.controller'
]);

angular.module('passport.system', [
  'passport.directives',
  'passport.services.factory'
]);

angular.module('passport.controller', [
  'passport.controller.factory',
  'passport.controller.popup'
]);