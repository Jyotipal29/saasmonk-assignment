import axios from "axios";
const url = "http://localhost:8080/api";
export const getAllMovies = async () => {
  const { data } = await axios.get(`${url}/movie/`);

  return data;
};

export const addMovie = async ({ name, date }) => {
  const { data } = await axios.post(`${url}/movie/add`, {
    name,
    releaseDate: date,
  });

  return data;
};
export const editMovie = async ({ id, name, date }) => {
  const { data } = await axios.post(`${url}/movie/edit`, {
    id,
    name,
    releaseDate: date,
  });

  return data;
};
export const deleteMovie = async ({ id }) => {
  const { data } = await axios.delete(`${url}/movie/delete/${id}`);

  return data;
};

export const getAllReviews = async (id) => {
  const { data } = await axios.get(`${url}/review/${id}`);

  return data;
};

export const addReview = async ({
  movieId,
  reviewerName,
  rating,
  reviewComment,
}) => {
  const { data } = await axios.post(`${url}/review/add`, {
    movieId,
    reviewerName,
    rating,
    reviewComment,
  });

  return data;
};
export const editReview = async ({
  rating,
  reviewComment,
  movieId,
  reviewerName,
  id,
}) => {
  const { data } = await axios.post(`${url}/review/edit`, {
    rating,
    reviewComment,
    movieId,
    reviewerName,
    id,
  });

  return data;
};
export const deleteReview = async (id) => {
  const { data } = await axios.delete(`${url}/review/delete/${id}`);

  return data;
};
