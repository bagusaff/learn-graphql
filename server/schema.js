const { gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Book" type defines the queryable fields for every book in our data source.
  type Animal {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    stock: Int!
    onSale: Boolean
    slug: String!
    category: Category!
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [Animal!]!
  }

  type MainCard {
    title: String
    image: String
  }
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    mainCards: [MainCard]
    animals: [Animal!]!
    animal(slug: String!): Animal
    categories: [Category!]!
    category(slug: String!): Category
  }

  type Mutation {
    addAnimal(
      image: String!
      title: String!
      rating: Float
      price: String!
      description: [String!]!
      stock: Int!
      onSale: Boolean
      slug: String!
      category: String!
    ): Animal
    removeAnimal(id: ID!): Boolean!
  }
`;

module.exports = {
  typeDefs,
};
