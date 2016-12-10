exports.get_helloworld = function(req, res) {
  hello = {
    "responce": "hello word"
  }

  //Return a hello world
  res.json(hello);
};
