import { createContext, useContext, useState, ReactNode } from "react";
type UserProviderProps = {
  children: ReactNode;
};
const criticContext = createContext({});

export const useCritic = () => {
  return useContext(criticContext);
};

export const CriticProvider = ({ children }: UserProviderProps) => {
  const [movieMode, setMovieMode] = useState();
  const [reviewMode, setReviewMode] = useState();
  const [movies, setMovies] = useState([]);

  return (
    <criticContext.Provider
      value={{
        movieMode,
        setMovieMode,
        reviewMode,
        setReviewMode,
        movies,
        setMovies,
      }}
    >
      {children}
    </criticContext.Provider>
  );
};
