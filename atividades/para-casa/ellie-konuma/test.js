const accounts = [
  {
    name: "Isa",
    balance: 1000,
    limit: 1000,
  },
  {
    name: "Tracer",
    balance: 1000,
    limit: null,
  },
  {
    name: "Marceline",
    balance: 1100,
    limit: 0,
  },
];
const bunda = (nomele, porra) => {
  return accounts.map((acc) =>
    acc.name === nomele ? { ...acc, ...porra } : acc
  );
};
console.log(bunda("Isa", { name: "jumba", limit: null }));

// spread operator
