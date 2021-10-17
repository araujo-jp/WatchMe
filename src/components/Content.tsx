import { memo } from "react";
import { MovieCard } from './MovieCard';

import '../styles/content.scss';
import { MovieProps } from '../@types/Movie';

interface ContentProps {
  movies: Array<MovieProps>
  selectedGenre: {
    title: string
  }
}

function ContentComponent({movies, selectedGenre}: ContentProps) {  
  

  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
    </div>
  )
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.movies, nextProps.movies);
})