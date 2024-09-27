import axios from "axios";
const url = "https://backend-2-peach.vercel.app/api";
type AddMovieInput = {
  name: string; // Name of the movie
  date: string; // Release date of the movie
};

type EditMovieInput = {
  id: string; // ID of the movie to edit
  name: string; // New name for the movie
  date: string; // New release date for the movie
};

type AddReviewInput = {
  movieId: string; // ID of the movie being reviewed
  reviewerName: string; // Name of the reviewer
  rating: number; // Rating out of 10
  reviewComment: string; // Review comment
};

type EditReviewInput = {
  id: string; // ID of the review to edit
  rating: number; // Updated rating
  reviewComment: string; // Updated review comment
  movieId: string; // ID of the movie being reviewed
  reviewerName: string; // Updated reviewer's name
};
export const getAllMovies = async () => {
  const { data } = await axios.get(`${url}/movie/`);

  return data;
};

export const addMovie = async ({ name, date }: AddMovieInput) => {
  const { data } = await axios.post(`${url}/movie/add`, {
    name,
    releaseDate: date,
  });

  return data;
};
export const editMovie = async ({ id, name, date }: EditMovieInput) => {
  const { data } = await axios.post(`${url}/movie/edit`, {
    id,
    name,
    releaseDate: date,
  });

  return data;
};
export const deleteMovie = async (id: string) => {
  const { data } = await axios.delete(`${url}/movie/delete/${id}`);

  return data;
};

export const getAllReviews = async (id: string) => {
  const { data } = await axios.get(`${url}/review/${id}`);

  return data;
};

export const addReview = async ({
  movieId,
  reviewerName,
  rating,
  reviewComment,
}: AddReviewInput) => {
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
}: EditReviewInput) => {
  const { data } = await axios.post(`${url}/review/edit`, {
    rating,
    reviewComment,
    movieId,
    reviewerName,
    id,
  });

  return data;
};
export const deleteReview = async (id: string) => {
  const { data } = await axios.delete(`${url}/review/delete/${id}`);

  return data;
};
