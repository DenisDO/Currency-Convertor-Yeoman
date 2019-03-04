"use strict";

export default function(app) {
  app.provider("CurrencyAPIservice", function() {
    let baseURL = "";
    let APIkey = "";

    this.setURL = url => (baseURL = url);
    this.setKey = key => (APIkey = key);

    this.listOfCurrencies = {};
    this.currenciesCodes = [];

    this.$get = [
      "$http",
      function($http) {
        return {
          getListOfCurrencies: () => $http({
              method: "GET",
              url: `${baseURL}currencies?apiKey=${APIkey}`
            }).then(({ data }) => {
              this.listOfCurrencies = angular.copy(data.results);
              return this.listOfCurrencies;
            }),

          getCurrenciesCodes: list => {
            for (const key in list) {
              this.currenciesCodes.push(list[key].id);
            }
            return this.currenciesCodes;
          },

          getRate: (curFrom, curTo) => $http({
              method: "GET",
              url: `${baseURL}convert?apiKey=${APIkey}&q=${curFrom}_${curTo}&compact=ultra`
            }).then(({ data }) => {
              const [key] = Object.keys(data);
              return data[key];
            }),

          calcExchangeValue: (value, rate, percentage) => value * rate - ((value * rate) / 100) * percentage
        };
      }
    ];
  });
}
