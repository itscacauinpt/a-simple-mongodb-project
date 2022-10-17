db.produtos.find({
  curtidas: { $gt: 10, $lt: 100 },
}, { _id: 0, nome: true, curtidas: true });