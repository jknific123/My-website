
/* GET HOME PAGE */
const index = (req, res) => {
  res.render('index', { title: "Jernej's web corner" })
};

module.exports = {
  index
};