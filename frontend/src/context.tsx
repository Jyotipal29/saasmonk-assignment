import { createContext, useContext, useState, ReactNode } from "react";
type UserProviderProps = {
  children: ReactNode;
};
const criticContext = createContext<CriticContextType>({} as CriticContextType);

export const useCritic = () => {
  return useContext(criticContext);
};

export const CriticProvider = ({ children }: UserProviderProps) => {
  const [movieMode, setMovieMode] = useState<string>();
  const [reviewMode, setReviewMode] = useState<string>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  const [selectedReview, setSelectedReview] = useState<Review>();

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
