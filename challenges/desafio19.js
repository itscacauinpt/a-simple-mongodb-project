db.produtos.updateMany(
  {},
  { $pull: { ingredientes: { $eq: "cebola" } } },
);

db.produtos.find({}, { _id: 0, nome: true, ingredientes: true });