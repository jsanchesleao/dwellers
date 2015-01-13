/* se estiver errado, fodase */
var Promise = require('bluebird');

var findDwellerById = function(id) {
  return new Promise(function(resolve, reject) {
    resolve({
      name: "Zuck",
      cod: "123banana",
      block: 1,
      house: 765,
      car: {
        cod: "IMB1234",
        color: "pink",
        model: "fusca"
      }
    });
  });
};

module.exports = {
  findDwellerById: findDwellerById
};
