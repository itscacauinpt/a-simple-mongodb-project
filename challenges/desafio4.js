db.produtos.find({
  vendidos: { $gt: 50, $lt: 100 },
}, { _id: 0, nome: true, vendidos: true }).sort({ vendidos: 1 });