exports.get_helloworld = function(req, res) {
  hello = {
    "responce": "hello bla"
  }

  //Return a hello world
  res.json(hello);
};
