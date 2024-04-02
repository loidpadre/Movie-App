import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import {Search} from "lucide-react"
import "../src/App.css"
function App() {
  //  2aff2594
  const Url = "https://www.omdbapi.com?&apikey=2aff2594"
  const [movie, setMovie] = useState([])
  const [searchTerm, setSearchTerm] = useState("")


  async function SearchMovie (title) {
      const response = await fetch(`${Url}&s=${title}`)
      const data = await response.json()
      setMovie(data.Search)
      console.log(movie)
      setSearchTerm("")
  }

  useEffect(() =>{
    SearchMovie("spiderman")
  }, [])
  return (
    <div className="app">
      <h1>MuviesLand</h1>
      <div className="search">
        <input placeholder="Search Movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search size={45} color="orange" onClick={() => SearchMovie(searchTerm)}/>
      </div>

      {
        movie?.length>0 ? (
          <div className="container">
          {
            movie.map((mov) =>(
              <MovieCard movie={mov}/>
            ))
          }
        </div>
        ): (
            <div className="empty">
              <h2>No movie found</h2>
            </div>
        )
      }
      
    </div>
  );
}

export default App;
