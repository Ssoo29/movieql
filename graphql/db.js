export let movies = [
  {
    id: 1,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: 2,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: 3,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: 4,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: 5,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: 6,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
];

export const getByID = (id) => {
  const person = people.find((item) => item.id === id);
  return person;
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
