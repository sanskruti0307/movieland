import React from "react";

const MovieCard = ({ movie}) =>{
    return(
        <div className="movie_card">
        <div className="movie_year">
         <p>{movie.Year}</p>
         </div> 
         <div>
             <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.title}/>
         </div>
         <div className="movie_details">
             <span>{movie.Type}</span>
             <h3>{movie.Title}</h3>
         </div>
     </div>
    )
}

export default MovieCard;