export let movies = [
  {
    id: 0,
    name: "Star wars",
    score: 3,
  },
  {
    id: 1,
    name: "happy time",
    score: 8,
  },
  {
    id: 2,
    name: "frozen",
    score: 4,
  },
  {
    id: 3,
    name: "ellsa",
    score: 6,
  },
];
export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
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
