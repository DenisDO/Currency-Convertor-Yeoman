'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';

import constants from './services/constants';
import values from './services/values';
import storeFactory from './services/store.factory';
import resolverProvider from './services/resolver.provider';
import APIservice from './services/APIservice';
import excludeFrom from './filters/filter';

validationTestDirective(shared);

constants(shared);
values(shared);
storeFactory(shared);
resolverProvider(shared);
APIservice(shared);
excludeFrom(shared);

export default shared;
