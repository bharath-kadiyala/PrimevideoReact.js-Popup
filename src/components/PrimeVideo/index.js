import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )
  return (
    <div className="app-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="primeVideo-sty"
      />

      <div className="movies-con">
        <h1 className="genres">Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />
      </div>
      <div className="movies-con">
        <h1 className="genres">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
