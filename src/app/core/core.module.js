'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';

import constants from './services/constants';
import values from './services/values';
import storeFactory from './services/store.factory';
import resolverProvider from './services/resolver.provider';
import APIservice from './services/APIservice';
import filterCurrency from './filters/filter';

validationTestDirective(shared);

filterCurrency(shared);
constants(shared);
values(shared);
storeFactory(shared);
resolverProvider(shared);
APIservice(shared);

export default shared;
