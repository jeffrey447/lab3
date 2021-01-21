
/*
 * GET home page.
 */

exports.view = function(req, res) {
  let nameToShow = (req.params.userName || 'World');
  console.log(`Name is ${nameToShow}.`);

  res.render('index', {
  	'name': nameToShow,
  });
};
