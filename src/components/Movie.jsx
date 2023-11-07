import React from "react";
import { createRoot } from 'react-dom/client';
import movies from './MOVIES_DATA.json'

function metascoreColor(metascore) {
    if (metascore >= 0 && metascore <= 49) {
      return 'red-text';
    } else if (metascore >= 50 && metascore <= 59) {
      return 'yellow-text';
    } else {
      return 'green-text';
    }
}



export const Movie = () => {
    
    return (
        <>
                           
            
            
                
        </>
    )
}
export const Listado = () => { 
    return (
        <>
            <h1>Listado de Películas</h1>
            <ul className="movie-list">
                {movies.map((movie) => {
                    return (
                         
                        <div className="column"> 
                            <div className="card"> 
                                <img
                                    src={movie.poster}
                                    alt={`Poster de ${movie.title}`}
                                    className="poster"
                                /> 
                                <div class="container">
                                    <h2> {movie.title}</h2>
                                    <p className="title">🎞️ Estreno: {movie.releaseDate} ⏳Duración:{movie.duration} 🎫 Público: {movie.maturity}  </p>
                                    <p className="title">🎭 Género: {movie.genres}</p>
                                    <p className="title">⭐ Rating:{movie.rating} 🥇Metascore: {movie.metascore}</p>                                               
                                    <p className="title">📽️ Director: {movie.director}</p>
                                    <p className="title">🎬 Protagonistas: {movie.mainActors}</p>
                                    <p className="resegna">Reseña:{movie.plot} </p>
                                </div>
                            </div>
                        </div>
                        
                    );
                })}      
            </ul>
        </>       
    );
}
