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
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedReview, setSelectedReview] = useState();

  return (
    <criticContext.Provider
      value={{
        movieMode,
        setMovieMode,
        reviewMode,
        setReviewMode,
        movies,
        setMovies,
        selectedMovie,
        setSelectedMovie,
        reviews,
        setReviews,
        movie,
        setMovie,
        selectedReview,
        setSelectedReview,
      }}
    >
      {children}
    </criticContext.Provider>
  );
};
