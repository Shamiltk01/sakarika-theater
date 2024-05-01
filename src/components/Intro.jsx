import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Import axios for API requests
import Card2 from './Card2'; // Import Cards2 component
import Aboutus from './Aboutus'; // Import Aboutus component

const Intro = () => {
  const [moviePosters, setMoviePosters] = useState([]); // State to store fetched movie posters
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0); // State to track the index of the current poster
  const cards2Ref = useRef(null);
  const aboutUsRef = useRef(null); // Ref for Aboutus component

  useEffect(() => {
    const fetchMoviePosters = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            api_key: '775ffc67f20ef642f55ceb576824b014',
            language: 'hi-IN', // Specify language code for Hindi
            region: 'IN', // Specify region code for India
            with_original_language: 'ml', // Filter by original language (Hindi)
            sort_by: 'release_date.desc', // Sort by release date in descending order
            include_adult: false,
            include_video: false,
            page: 2
          }
        });
        
        const moviesWithPosters = response.data.results.filter(movie => movie.poster_path !== null); // Filter out movies without a poster path
        const posters = moviesWithPosters.map(movie => movie.poster_path); // Extract poster paths
        setMoviePosters(posters);
      } catch (error) {
        console.error('Error fetching movie posters:', error);
      }
    };
    
    fetchMoviePosters();
  }, []);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPosterIndex((prevIndex) => (prevIndex + 1) % moviePosters.length);
    }, 3000);

    return () => clearTimeout(timer); // Clear timer on component unmount or when poster changes
  }, [currentPosterIndex, moviePosters]);

  const handleScroll = () => {
    if (cards2Ref.current) {
      cards2Ref.current.scrollIntoView({ behavior: 'smooth' ,block: 'start', inline: 'nearest' });
    }
  };

  const handleFeaturesClick = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{ backgroundColor: 'transparent', border: 'none', borderRadius: '15px', padding: '20px' }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body" style={{color: 'white', fontFamily: 'Arial, sans-serif' ,marginTop:'70px'}}>
                  <h1 className="card-title" style={{ fontSize: '5rem', lineHeight: '1.2', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>Welcome to <br /> Sagarika!</h1>
                  <p style={{marginTop: '50px ',marginBottom:'70px', fontFamily: 'Arial, sans-serif' }}>Experience the magic of cinema. Book your tickets now for an unforgettable movie night.</p>
                  <div style={{ display: 'flex',alignItems: 'center', marginTop: '90px',marginBottom:'40px' }}>
                    <button className="btn1  me-3" style={{ width: '200px',  borderRadius: '50px'}} onClick={handleScroll}>View Movies</button>
                    <button className="btn1 me-3" style={{ width: '200px',borderRadius: '50px' }} onClick={handleFeaturesClick}>Features</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col mb-3">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${moviePosters[currentPosterIndex]}`} // Use the poster path
                      className="img-fluid rounded-start"
                      alt={`Movie Poster ${currentPosterIndex + 1}`}
                      style={{ height: '490px', width: '100%', borderRadius: '8px', clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)', transition: 'clip-path 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }} // Set the transition animation with a cubic-bezier timing function
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={cards2Ref} id="Card2">
        {/* You can render additional content below the movie posters if needed */}
      </div>
      <div ref={aboutUsRef} /> {/* Render the Aboutus component and assign the ref */}
    </div>
  );
};

export default Intro;
