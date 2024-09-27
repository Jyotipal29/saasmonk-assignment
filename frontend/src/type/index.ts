export {};

declare global {
  type Movie = {
    _id: string;
    name: string;
    releaseDate: string;
    averageRating: string;
  };
  type Review = {
    _id: string;
    movieId: string;
    reviewerName: string;
    rating: number;
    reviewComment: string;
  };

  type CriticContextType = {
    movieMode?: string;
    setMovieMode: React.Dispatch<React.SetStateAction<string>>;
    reviewMode?: string;
    setReviewMode: React.Dispatch<React.SetStateAction<string>>;
    movies: Movie[];
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    selectedMovie?: Movie;
    setSelectedMovie: React.Dispatch<React.SetStateAction<Movie>>;
    reviews: Review[];
    setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
    movie?: Movie;
    setMovie: React.Dispatch<React.SetStateAction<Movie>>;
    selectedReview?: Review;
    setSelectedReview: React.Dispatch<React.SetStateAction<Review>>;
  };
}
