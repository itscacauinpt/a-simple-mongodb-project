db.produtos.find({ nome: { $nin: ["Big Mac", "McChicken"] },
}, { _id: 0, nome: true, curtidas: true, vendidos: true });