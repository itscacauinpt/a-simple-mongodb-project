db.produtos.find({
  $or: [
    { curtidas: { $eq: 36 } },
    { vendidos: { $eq: 85 } },
  ],
}, { _id: 0, nome: true, curtidas: true, vendidos: true });