const inventory = [];
let currentId = 1;

// post
exports.createProduct = (req, res) => {
  const { name, category, price, quantity, supplier, status } = req.body;
  const product = {
    id: currentId++,
    name,
    category,
    price,
    quantity,
    supplier,
    status,
  };
  inventory.push(product);
  res.status(201).json(product);
};

// get
exports.get = (req, res) => {
  const { category } = req.query;
  if (category) {
    const filteredProducts = inventory.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase()),
    );
    return res.json(filteredProducts);
  }
  res.json(inventory);
};

//getUsingID
exports.getUsingId = (req, res) => {
  const product = inventory.find((p) => {
    return p.id === parseInt(req.params.id);
  });
  if (!product) {
    return res.status(404).send("Product not found");
  }
  res.json(product);
};

//getByName
exports.getUsingName = (req, res) => {
  const product = inventory.find((p) => {
    return p.name === req.params.name;
  });
  if (!product) {
    return res.status(404).send("Product not found");
  }
  res.json(product);
};

//put
exports.updateById = (req, res) => {
  const product = inventory.find((product) => {
    return product.id === parseInt(req.params.id);
  });

  if (!product) {
    return res.status(404).send("Product Not Found");
  }

  const { name, category, price, quantity, supplier, status } = req.body;
  product.name = name;
  product.category = category;
  product.price = price;
  product.quantity = quantity;
  product.supplier = supplier;
  product.status = status;

  res.json(product);
};

//partialUpdate
exports.partialUpdateById = (req, res) => {
  const product = inventory.find((p) => {
    return p.id === parseInt(req.params.id);
  });

  if (!product) {
    return res.status(404).send("Product not found");
  }

  const { name, category, price, quantity, supplier, status } = req.body;

  if (name !== undefined) {
    product.name = name;
  }
  if (category !== undefined) {
    product.category = category;
  }
  if (price !== undefined) {
    product.price = price;
  }
  if (quantity !== undefined) {
    product.quantity = quantity;
  }
  if (supplier !== undefined) {
    product.supplier = supplier;
  }
  if (status !== undefined) {
    product.status = status;
  }
  res.json(product);
};

//deleteById
exports.deleteById = (req, res) => {
  const index = inventory.findIndex((p) => {
    return p.id === parseInt(req.params.id);
  });

  if (index === -1) return res.send("Product Not Found");

  inventory.splice(index, 1);
  res.status(201).send();
};
