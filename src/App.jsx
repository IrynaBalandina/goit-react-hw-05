

import './App.css';
import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage")
);

function App() {


  return (
    <>
    <Navigation />

    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
    <Toaster position="top-right" reverseOrder={false} />
  </>
  )
}

export default App;
