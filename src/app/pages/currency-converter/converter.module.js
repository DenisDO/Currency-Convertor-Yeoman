'use strict';

import CurrencyConverterComponent from './converter.component';

const currencyConverterModule = angular.module('currency-converter-module', [
    'ui.router'
])
    .config(($stateProvider, $urlRouterProvider, CurrencyAPIserviceProvider) => {
        'ngInject';

        CurrencyAPIserviceProvider.setURL('https://free.currencyconverterapi.com/api/v6/');
        // CurrencyAPIserviceProvider.setKey('4483a148b31992545c54');
        CurrencyAPIserviceProvider.setKey('fab31dd780a0e3451d8a');

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('converter', {
                url: '/converter',
                component: 'converter',
                resolve: {
                    currenciesCodes: function(CurrencyAPIservice) {
                        'ngInject';

                        return CurrencyAPIservice.getListOfCurrencies()
                            .then(data => CurrencyAPIservice.getCurrenciesCodes(data));
                    }
                }
            });
    })
    .component('converter', new CurrencyConverterComponent());

export default currencyConverterModule;
