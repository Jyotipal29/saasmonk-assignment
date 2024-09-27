import axios from "axios";
const url = "http://localhost:8080/api/movie/";
export const getAllMovies = async () => {
  const { data } = await axios.get(url);

  return data;
};

export const addMovie = async ({ name, date }) => {
  console.log({ name, date }, "name and date");
  const { data } = await axios.post(`${url}add`, { name, releaseDate: date });

  return data;
};
