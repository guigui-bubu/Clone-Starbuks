// Reducers pour les produits

const initialState = {
  products: [
    {
      name: "Iced Latte",
    },
    {
      name: "Doubleshot Iced Coffee",
    },
    {
      name: "Doubleshot Vanilla Iced Coffee",
    },
    {
      name: "Caramel Macchiato",
    },
    {
      name: "Iced Caramel Macchiato",
    },
    {
      name: "Iced Cappuccino",
    },
    {
      name: "Ristretto Bianco",
    },
    {
      name: "Cold Brew Latte",
    },
    {
      name: "Mocha",
    },
    {
      name: "Iced Mocha",
    },
    {
      name: "Americano",
    },
    {
      name: "Iced Americano",
    },
    {
      name: "Café Filtre",
    },
    {
      name: "Café Filtre Glacé",
    },
    {
      name: "Chocolat Viennois Signature",
    },
    {
      name: "Chocolat Viennois Signature Glacé",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
