// query resorver : relove query(is a question to databse)
import { getMovies } from "./db";
const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
  },
};

export default resolvers;
