db.produtos.updateOne(
  { nome: "Big Mac" },
  { $unset: { curtidas: "" } },
  // { $unset: { quantity: "", instock: "" } }
);

db.produtos.find({}, { _id: 0, nome: true, curtidas: true });