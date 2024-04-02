export const MovieCard = ({movie}) =>{
    return(
        <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <img src={movie.Poster !== 'N/A'? movie.Poster: "httpS://via.placeholder.com/400"} alt="" />
          </div>
          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
        </div>
      
    )
}