import React, { useState  } from 'react';
  import saifImage from '../images/saif.png';
  import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
  import { XMarkIcon } from '@heroicons/react/24/outline';
  import { Link } from 'react-router-dom';
  import { convertToEmbedUrl } from '../Data'; // Adjust the path if needed

  const NavBar = ({ onAddMovie , search ,setSearch}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filterType, setFilterType] = useState('title');
    const [ratingSearch, setRatingSearch] = useState(0); 
    const [isDefault, setIsDefault] = useState(true);
    const [title, setTitle] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [trailer, setTrailer] = useState('');
    const [rate, setRate] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [isOpen1, setIsOpen1] = useState(false);
    const [hoveredStar, setHoveredStar] = useState(0); // Track hovered star
    const [searchTerm, setSearchTerm] = useState('');

    
  

    
  
    const capitalizeTitle = (title) => {
      return title
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };

    const toggleDropdown = () => {
      setIsOpen(prev => !prev);
    };
    
    const handleToggleIconClick = () => {
      setIsDefault(prev => !prev);
    };


    const handleSubmit = (e) => {
      const newMovie = {
        title,
        posterUrl,
        rate,
        description,
        trailer: convertToEmbedUrl(trailer), 
      };


      const validationError = validateFields();
      if (validationError) {
        setError(validationError);
        return;
      }

    

      try {
        onAddMovie(newMovie);
        resetForm();
        setIsOpen(false); // Close dialog after adding movie
      } catch (err) {
        setError("An error occurred while adding the movie.");
        console.error(err);
      }
    };

    const validateFields = () => {
      if (!title || !posterUrl || !rate || !description ||!trailer) {
        return "Please fill in all fields.";
      }
      return null;
    };

    const resetForm = () => {
      setTitle('');
      setPosterUrl('');
      setRate('');
      setTrailer('');
      setDescription('');
      setError('');
    };
   

    return (
      <div>
        <nav className="bg-black">
          <div className="mx-auto w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex ml-4 flex-shrink-0 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icons">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  <div className="logo">
                    <span className="flick">Flick</span><span className="net">Net</span>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="ml-6 flex space-x-4">
                  <Link to="/Movies" className="rounded-md bg-teal-800 px-3 py-2 text-sm font-medium text-white" aria-current="page">Movies</Link>
  <Link to="/TV-Shows" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-teal-700 hover:text-white">TV Shows</Link>
  <Link to="/MY-List" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-teal-700 hover:text-white">My List</Link>
                  </div>
                </div>
              </div>
              <div className="w-full flex mr-10 h-8  space-x-4 max-w-sm min-w-[200px]">
  <div className="relative flex" style={{marginLeft:"-100px"}}>
    <select
      style={{ cursor: 'pointer' }}
      className="rounded bg-gray-800 border-transparent py-1 px-1.5 text-center flex items-center text-sm font-medium transition-all text-gray-300"
      value={filterType}
      onChange={(e) => setFilterType(e.target.value)}
    >
      <option value="title" className='text-gray-300'>Search by Title</option>
      <option value="rating" className='text-gray-300'>Search by Rating</option>
    </select>

    {filterType === 'title' ? (
      <input style={{marginTop:"-2px",marginLeft:"15px"}}
        type="text"
        className="w-full h-9 bg-transparent placeholder:text-gray-300 text-gray-300 text-sm border border-slate-200 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Search by title..."
        value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}      
      />
    ) : (
      <div className="flex mt-1 justify-center">
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(0)}
            onClick={() => {
              setRate(star);
              setRatingSearch(star); // Update rating search state
            }}

            style={{
              fontSize: "24px",
              color: rate >= star || hoveredStar >= star ? 'gold' : '#009688',
              cursor: 'pointer',
              marginLeft: "16px",
              marginTop:"-8px"
            }}
          >
            ★
          </span>
        ))}
      </div>
    )}
    
    <button
  style={{marginTop:"-2px",marginLeft:"15px"}}
      className="top-1 h-9 right-1 flex items-center rounded-md bg-teal-800 hover:bg-teal-700 px-3 py-2 text-md font-medium text-white"
      type="button"
      onClick={() =>  {
        if (filterType === 'title') {
          setSearch(searchTerm); // For title search
        } else {
          setSearch(ratingSearch); // For rating search
        }
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-4 mr-1.5">
        <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
      </svg>
      Search
    </button>
  </div>
</div>

              <button className="btn btn-outline-success border  border-teal-700 text-gray-400 hover:text-gray-400 hover:bg-teal-700  mr-10 flex rounded-md  px-3 py-2 text-md font-medium " onClick={() => setIsOpen1(true)}><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
              Add new movie</button>
                <div
                onClick={handleToggleIconClick} 
                style={{ cursor: 'pointer' }}>
                <div>
                {isDefault ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icons">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icons">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3" />
                  </svg>
                )}
                </div>
              </div>

              <Dialog open={isOpen1} onClose={() => setIsOpen1(false)} className="relative z-10">
              <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75" />
              <div className="fixed inset-0 flex items-center justify-center">
                <DialogPanel className="w-full max-w-lg p-6 bg-black rounded">
                  <button onClick={() => setIsOpen1(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-500">
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                  <h2 className="text-xl text-teal-800 font-bold text-center">Add a New Movie :</h2>
                  <form onSubmit={handleSubmit} className="mt-4">
                    <div>
                      <label htmlFor="title" className="text-gray-400 block text-sm">Title:</label>
                      <input type="text" id="title" value={title} onChange={(e) => {
    const capitalizedTitle = capitalizeTitle(e.target.value);
    setTitle(capitalizedTitle);
  }}required className="mt-1 block w-full border rounded-md px-3 py-2" />
                    </div>
  

                    <div>
    <label htmlFor="posterUrl" className="block text-gray-400 text-sm">Poster URL:</label>
    <input 
      
      id="posterUrl" 
      onChange={(e)=> setPosterUrl(e.target.value)} 
      required 
      className="mt-1 block w-full border rounded-md px-3 py-2"
      type="text" 
    />
  
  </div>

  <div>
    <label htmlFor="rating" className="block text-gray-400 text-sm">Rating:</label>
    <div className="flex mt-1 justify-center ml-4   ">
    {[1, 2, 3, 4, 5].map(star => (
      <span
        key={star}
        onMouseEnter={() => setHoveredStar(star)} // Set hovered star
        onMouseLeave={() => setHoveredStar(0)} // Reset on leave
        onClick={() => setRate(star)} // Set rating on click
        style={{
          fontSize: "36px",
          color: rate >= star || hoveredStar >= star ? 'gold' : '#009688', // Change color
          cursor: 'pointer',
          marginLeft:"6px"
        }}
      >
        ★
      </span>
    ))}
  </div>
  </div>

                      <label htmlFor="description" className="block text-gray-400 text-sm">Description:</label>
                      <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required className="mt-1 block w-full border rounded-md px-3 py-2" rows={4} />
                      <div>
    <label htmlFor="trailer" className="block text-gray-400 text-sm">Trailer : </label>
    <input 
      
      id="trailer" 
      onChange={(e)=> setTrailer(e.target.value)} 
      required 
      className="mt-1 block w-full border rounded-md px-3 py-2"
      type="text" 
    />
  
  </div>
                      {posterUrl && (
      <div className="flex justify-center mt-2">
        <img src={posterUrl} alt="Movie Poster" className="w-32 h-32 object-cover border rounded-md" />
      </div>
    )}             
                      {error && <p className="text-red-600 mt-2">{error}</p>}                  <div className="mt-4 flex justify-end">
    <div style={{ display: "flex",  alignItems: "center" }}>
    <button 
    type="submit" 
    className="ml-10 flex rounded-md bg-teal-800 px-3 py-2 text-md font-medium w-40 h-10 text-white"
    onClick={(e) => {
      e.preventDefault(); // Prevent default action
      const validationError = validateFields();
      if (!validationError) {
        handleSubmit(e); // Call handleSubmit if there's no error
        setIsOpen1(false); // Close the modal after submission
      } else {
        setError(validationError); // Set error if validation fails
      }
    }}
    
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
       Add Movie
  </button>

  <button 
    type="button" 
    onClick={() => setIsOpen1(false)} 
    className="ml-4 flex text-md font-medium w-30 h-10 bg-gray-300 text-gray-700 px-4 py-2 rounded"
  >
    Cancel
  </button>



    </div>
  </div>

                  </form>
                </DialogPanel>
              </div>
            </Dialog>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative mr-4">
                  <div>
                    <button 
                      type="button" 
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" 
                      id="user-menu-button" 
                      onClick={() => {
                        setIsOpen1(false);
                        toggleDropdown();
                      }}
                    >
                      <img 
                        className="h-8 w-8 rounded-full" 
                        src={saifImage} 
                        alt="" 
                      />
                    </button>
                  </div>
                  {isOpen && (
                    <div  
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" 
                      role="menu" 
                      aria-orientation="vertical" 
                      aria-labelledby="user-menu-button" 
                      tabIndex="-1"
                    >
                      <a style={{ display: "flex",  alignItems: "center" }} href="#" className="block px-4 py-2 rounded-md text-md font-medium text-gray-300 hover:bg-teal-700 hover:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-0"><svg className='icons' xmlns="http://www.w3.org/2000/svg" fill="none" style={{color:"#009688" }}  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
  Your Profile</a>
                      <a style={{ display: "flex",  alignItems: "center" }} href="#" className="block px-4 py-2 rounded-md text-md font-medium text-gray-300 hover:bg-teal-700 hover:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-1"><svg className='icons' xmlns="http://www.w3.org/2000/svg" fill="none" style={{color:"#009688" }}  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
  Settings</a>
                      <a  style={{ display: "flex",  alignItems: "center" }} href="#" className="block px-4 py-2 rounded-md text-md font-medium text-gray-300 hover:bg-teal-700 hover:text-white" role="menuitem" tabIndex="-1" id="user-menu-item-2"><svg className='icons' xmlns="http://www.w3.org/2000/svg" fill="none" style={{color:"#009688" }} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                    Sign out</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  };

  export default NavBar;