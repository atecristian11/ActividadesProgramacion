const Product = require("../models/product");

//registra un producto
const registerProduct = async (req, res) => {
  //valido que no me lleguen valores null
  if (
    !req.body.name ||
    !req.body.price ||
    !req.body.code ||
    !req.body.description
  )
    return res.status(401).send("Process failed: Incomplete data");

  //validar si existe el rol
  const existingCode = await Product.findOne({ code: req.body.code });
  // ya este registro esta en la base de datos y retorno un error de 401
  if (existingCode)
    return res.status(401).send("Process failed: code already exist");

  //despues de validar entonces ya puedo guardar los datos a la base de datos
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    code: req.body.code,
    description: req.body.description,
    dbStatus: true,
  });

  const result = await product.save();
  if (!result) return res.status(401).send("Failed to register product");
  return res.status(200).send({ product });
};

//lista los productos
const listProduct = async (req, res) => {
  //traigame todo de la colección Role
  const product = await Product.find();
  //valido si no encuentra resultados
  if (!product) return res.status(401).send("No Product");
  //con este retornamos la respuesta satisfactoria del producto
  return res.status(200).send({ product });
};

module.exports = { registerProduct, listProduct };
