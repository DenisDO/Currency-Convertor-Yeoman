'use strict';

export default function (app) {
    app
        .value('feePercantage', [0, 2, 5, 10])
        .value('defaultFrom', 'EUR')
        .value('defaultTo', 'UAH')
        .value('defaultPercantage', 0);
}
