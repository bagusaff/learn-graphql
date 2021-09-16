const Query = {
  mainCards: (parent, args, { mainCards }) => mainCards,
  animals: (parent, args, { animals }) => animals,
  animal: (parent, args, { animals }) => {
    let result = animals.find((animal) => {
      return animal.slug === args.slug;
    });
    return result;
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories }) => {
    let result = categories.find((category) => {
      return category.slug === args.slug;
    });
    return result;
  },
};

module.exports = Query;
