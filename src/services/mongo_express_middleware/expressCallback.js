export default {
  read: function(req, res, next) {
    res.status(200).send(res.data);
  },
  create: function(req, res, next) {
    res.status(200).send(res.data);
  },
  readEntity: function(req, res, next) {
    res.status(200).send(res.data);
  },
  update: function(req, res, next) {
    res.status(200).send(res.data);
  }
};
