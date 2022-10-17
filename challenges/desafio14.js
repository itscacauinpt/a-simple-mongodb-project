db.produtos.find({ ingredientes: { $in: ["picles"] } },
  { _id: 0, nome: true, ingredientes: true, valoresNutricionais: { $slice: 3 } });