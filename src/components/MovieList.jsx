import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Modal from './Modal';

const MovieList = ({ movies, search }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMovies = movies.filter(movie => {
    if (typeof search === 'string') {
      return movie.title.toLowerCase().includes(search.toLowerCase().trim());
    } else if (typeof search === 'number') {
      return movie.rate === search;
    }
    return false; 
  });

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <strong><h2 style={{ marginTop: '-50px', marginBottom: "30px", fontSize: "32px" }}>List of movies:</h2></strong>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onClick={() => openModal(movie)} />
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} movie={selectedMovie} />
    </div>
  );
};

export default MovieList;