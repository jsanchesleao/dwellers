var dweller = require('../../data/dweller');

module.exports = function(app) {

  app.get('/api/dweller/:id', function(req, res) {
    console.log(req.params.id);

    dweller.findDwellerById(req.params.id).then(function(data) {
      res.send(data);
    });
  });


}
