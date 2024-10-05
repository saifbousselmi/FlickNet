import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import { moviesData } from './Data';
import { Route, Routes, useLocation } from 'react-router-dom';
import TVShows from './components/TVShows';
import MYList from './components/MYList';
import ErrorPage from './components/ErrorPage';
import Home from './components/home';
import Footer from './components/Footer'; // Import Footer

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState('');
  const location = useLocation();

  const handleAddMovie = (newMovie) => {
    const updatedMovies = [{ ...newMovie, id: movies.length + 1 }, ...movies];
    setMovies(updatedMovies);
    console.log("Movie added:", newMovie);
  };

  const isRegistered = true; 
  const pathsWithNavBar = ['/Movies', '/TV-Shows', '/My-List'];

  return (
    <div>
      {isRegistered && pathsWithNavBar.includes(location.pathname) && (
        <NavBar onAddMovie={handleAddMovie} movies={movies} search={search} setSearch={setSearch} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        {isRegistered ? (
          <>
            <Route path="/Movies" element={<MovieList movies={movies} search={search} />} />
            <Route path="/TV-Shows" element={<TVShows />} />
            <Route path="/My-List" element={<MYList />} />
            <Route path="/*" element={<ErrorPage />} />
          </>
        ) : (
          <Route path="/*" element={<ErrorPage />} />
        )}
      </Routes>
      <Footer /> {/* Include the Footer here */}
    </div>
  );
};

export default App;
