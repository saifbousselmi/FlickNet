import React from 'react';

const Modal = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className=" bg-black p-4 rounded-lg max-w-lg">
        <h2 className="text-2xl text-teal-700 font-bold mb-2">{movie.title} :</h2>
        <p className="mb-4 text-gray-400">{movie.description}</p>
        <iframe
          width="100%"
          height="315"
          src={movie.trailer}
          title={movie.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <button style={{marginLeft:"370px"}}
          className="mt-4  btn btn-outline-success text-gray-400 border-gray-400 hover:text-gray-400 hover:bg-teal-700 px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
