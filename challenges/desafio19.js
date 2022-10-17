db.produtos.updateMany(
  {},
  { $pull: {
    ingredientes: { $eq: "cebola" },
  } },
  // {
  //   $pull: {
  //     items: {
  //       name: { $in: ["pens", "envelopes"] },
  //     },
  //   },
  // },
);

db.produtos.find({}, { _id: 0, nome: true, ingredientes: true });