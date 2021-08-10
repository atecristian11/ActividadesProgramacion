const Warehouse = require("../models/warehouse");

//registra un producto
const registerWarehouse = async (req, res) => {
  //valido que no me lleguen valores null
  if (!req.body.name || !req.body.direction || !req.body.city)
    return res.status(401).send("Process failed: Incomplete data");

  //validar si existe el rol
  const existingName = await Warehouse.findOne({ code: req.body.name });
  // ya este registro esta en la base de datos y retorno un error de 401
  if (existingName)
    return res.status(401).send("Process failed: code already exist");

  //despues de validar entonces ya puedo guardar los datos a la base de datos
  const warehouse = new Warehouse({
    name: req.body.name,
    direction: req.body.direction,
    city: req.body.city,
    dbStatus: true,
  });

  const result = await warehouse.save();
  if (!result) return res.status(401).send("Failed to register warehouse");
  return res.status(200).send({ warehouse });
};

//lista los productos
const listWarehouse = async (req, res) => {
  //traigame todo de la colección Role
  const warehouse = await Warehouse.find();
  //valido si no encuentra resultados
  if (!warehouse) return res.status(401).send("No warehouse");
  //con este retornamos la respuesta satisfactoria del producto
  return res.status(200).send({ warehouse });
};

module.exports = { registerWarehouse, listWarehouse };
