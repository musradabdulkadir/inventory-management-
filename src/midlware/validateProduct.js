const validate = (req, res, next) => {
  const { name, category, price,quantity,supplier,status } = req.body;
  if (!name || !category || !price || !quantity || !supplier || !status) {
    return res
      .status(400)
      .send("Please make sure You Have Entered 'Name, category, price, quantity, supplier, status'");
  }
  next();
};

module.exports= validate
