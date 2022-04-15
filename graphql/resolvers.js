import { movies, getByID, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => getByID(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
