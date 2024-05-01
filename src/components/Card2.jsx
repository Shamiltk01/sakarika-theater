import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

const Card2 = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [movie, setMovie] = useState();
  const [give, setGive] = useState([]);
  const fetchMovie = () => {
    axios
      .get("https://movie-app-backend-s5np.onrender.com/movie/viewall")
      .then((response) => {
        const movies = response.data.movies;
        const lastMovie = movies[movies.length - 1];
        sessionStorage.setItem("movieId", lastMovie._id);
        const { previousMovie, movieName, upcomingMovie } = lastMovie;
        setGive((prevMovies) => [...prevMovies, previousMovie]);
        setGive((prevMovies) => [...prevMovies, movieName]);
        setGive((prevMovies) => [...prevMovies, upcomingMovie]);
        sessionStorage.setItem("movieName", movieName);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };
  console.log(sessionStorage.getItem("movieId"))
  useEffect(() => {
    fetchMovie();
  }, []);
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movies = await Promise.all(
          give.map(async (name) => {
            const response = await axios.get(
              "https://api.themoviedb.org/3/search/movie",
              {
                params: {
                  api_key: "775ffc67f20ef642f55ceb576824b014",
                  language: "en-US",
                  query: name,
                },
              }
            );
            return response.data.results.length > 0
              ? response.data.results[0]
              : null;
          })
        );
        setMoviesData(movies.filter((movie) => movie !== null));
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [give]);
  const navigate = useNavigate();
  const handleViewMore = (movieId) => {
    sessionStorage.setItem("selectedMovieId", movieId); // Store movie ID in sessionStorage
    navigate("/smovie"); // Navigate to the SingleMovie page
  };

  return (
    <div>
      <style>{`
        .card1-group {
          display: flex;
          flex-wrap: wrap; /* Ensure cards wrap to the next line */
          gap: 20px; /* Adjust the gap size as needed */
          justify-content: center;
          position: relative; /* Position the card1 group relative to its container */
        }
        body {
          background-color: black; /* Set the background color to black */
        }

        .card1 {
          position: relative; /* Ensure proper stacking */
          border-radius: 15px; /* Rounded corners */
          
          overflow: hidden; /* Ensures rounded corners apply */
          box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5); /* Optional: Add shadow */
          flex-grow: 1; /* Allow cards to grow */
          max-width: 300px; 
          min-width:300px/* Set max-width to prevent card1s from stretching too much */
          height: 100%; /* Make the card1 occupy the entire height */
          transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
          display: flex; /* Use flexbox for positioning */
        
          border: 2px solid rgba(255, 255, 255, 0); /* Add white border with reduced opacity */
          margin-bottom: 20px; /* Add margin to create space between card1s */
        }

        .card1:hover {
          transform: scale(1.05); /* Scale the card1 on hover */
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3); /* Add a subtle shadow */
        }

        .card1-body {
          padding: 1.5rem;
          flex: 1; /* Fill remaining space */
          display: flex; /* Use flexbox for positioning */
          flex-direction: column; /* Align children vertically */
          justify-content: space-between; /* Space evenly between children */
          position: relative; /* Position the card1 body relative to its container */
        }

        .card1 img {
          width: 100%; /* Make the image fill its container */
          height: 100%; /* Make the image fill the entire height of the card1 */
          object-fit: cover; /* Ensure the image covers the entire space */
          border-top-left-radius: 15px; /* Match the top-left border radius */
          border-top-right-radius: 15px; /* Match the top-right border radius */
          margin: 0; /* Remove any default margin */
        }

        .btn-view-more {
          background-color: #ffeba7;
          color:#102770;
          box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);
          border: 1px solid white;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          cursor: pointer;
          position: absolute;
          z-index: 999;
          font-size: 13px;
          font-weight: 600;
          top: 92%; /* Position it vertically in the middle */
          left: -300%; /* Position it horizontally in the middle */
          transform: translate(-50%, -50%); /* Center it both vertically and horizontally */
        }
        .btn-view-more:hover {
          background-color: #102770;
          color: #ffeba7;
        }
      
        /* Layer styles */
        .card1::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1;
          border-radius: 15px; /* Ensure rounded corners */
          transition: opacity 0.3s ease;
        }

        .card1:hover::after {
          opacity: 0; /* Hide the layer on hover */
        }

        .layer-text {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 5px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 5px;
          font-size: 12px;
          font-weight: bold;
          z-index: 2; /* Ensure the layer text is above the blackish layer */
        }

        /* Remove blackish shade from the second card1 */
        .card1:nth-child(2)::after {
          opacity: 0; /* Hide the blackish layer for the second card1 */
        }

        /* card1 title and text color */
        .card1-title,
        .card1-text {
          color: white !important; /* Set text color to white */
        }
      `}</style>

      <div className="card1-group my-5">
        {moviesData.map((movie, index) => (
          <div className="card1" key={movie.id}>
            <div className="layer-text">
              {index === 0
                ? "Previous Movie"
                : index === 1
                ? "Now Playing"
                : "Upcoming Movie"}
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="card1-body">
              {/* <p className="card1-text">Release Date: {movie.release_date}</p>
              <p className="card1-text">Vote Average: {movie.vote_average}</p> */}
              {index === 1 && (
                <>
                  <button
                    className="btn-view-more"
                    onClick={() => handleViewMore(movie.id)}
                  >
                    Book Ticket
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
