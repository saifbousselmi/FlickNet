import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const MovieCard = ({ movie, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // Simulate the network request for downloading
  useEffect(() => {
    if (isLoading) {
      const simulateNetworkRequest = () => new Promise((resolve) => setTimeout(resolve, 3000));
      simulateNetworkRequest().then(() => {
        setLoading(false); // Reset loading state after download simulation
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    onClick(movie); // Open modal on image click
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleDownload = () => {
    setLoading(true); // Start loading when download button is clicked
  };

  return (
    <div >
      <a className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          {movie.posterUrl && (
            <img 
              src={movie.posterUrl} 
              alt={`${movie.title} Poster`} 
              className="border rounded-md cursor-pointer" 
              onClick={handleClick} // Open modal on image click
            />
          )}
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900 flex justify-center">{movie.title}</h3>
        <p style={{ height: "70px" }} className="mt-1 text-sm text-gray-700">
          {movie.description}
        </p>
        <div className='ml-20 mt-2'>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{
                fontSize: "24px",
                cursor: 'pointer',
                color: movie.rate >= star ? 'gold' : 'gray',
                marginLeft: "4px"
              }}
            >
              ★
            </span>
          ))}
        </div>

        <div className='flex justify-between items-center mt-9'>
          <button
            className="flex text-white bg-teal-800 px-4 py-2 rounded"
            disabled={isLoading} // Disable button while loading
            onClick={handleDownload} // Handle click for downloading
          >       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='size-6'>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
        </svg>
            {isLoading ? 'Downloading...' : 'Download'} {/* Change button text based on loading state */}
          </button>
          <div className='flex'>
            <svg style={{ marginLeft: "6px" }} className='icons' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            <FaHeart
              className={`heart-icon ${isFavorite ? 'red' : ''}`}
              onClick={toggleFavorite}
              style={{ cursor: 'pointer', marginLeft: "6px" }}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default MovieCard;
