exports.get_helloworld = function(req, res) {
  hello = {
    "responce": "hello bla2"
  }

  //Return a hello world
  res.json(hello);
};
