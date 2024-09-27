import axios from "axios";
const url = "http://localhost:8080/api/movie/";
export const getAllMovies = async () => {
  const { data } = await axios.get(url);

  return data;
};

export const addMovie = async ({ name, date }) => {
  const { data } = await axios.post(`${url}add`, { name, releaseDate: date });

  return data;
};
export const editMovie = async ({ id, name, date }) => {
  const { data } = await axios.post(`${url}edit`, {
    id,
    name,
    releaseDate: date,
  });

  return data;
};
export const deleteMovie = async ({ id }) => {
  console.log(id, "id ");
  const { data } = await axios.delete(`${url}delete/${id}`);

  return data;
};
