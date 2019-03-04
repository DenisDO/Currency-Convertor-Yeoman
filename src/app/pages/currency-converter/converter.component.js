'use strict';

import currencyConverterController from './converter.controller';
import currencyConverterTpl from './converter.html';

export default class CurrencyConverterComponent {
    constructor() {
        this.controller = currencyConverterController;
        this.templateUrl = currencyConverterTpl;
        this.controllerAs = 'curCont';
    }
}