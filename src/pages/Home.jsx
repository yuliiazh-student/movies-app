import SearchForm from "../components/SearchForm";
import { createContext, useEffect, useState } from "react";
import authFetch from "../helpers/authFetch";
import useStorage from "../hooks/useStorage";
import { loader } from "../helpers/functions";
import SearchResultList from "../components/SearchResultList";
import { useGeneralStorage } from "../storage";

export const GenreContext = createContext(null)

export default function Home() {
  const { set, get } = useStorage('local')
  const [result, setResult] = useState(get('searchResult') || [])
  const [popular, setPopular] = useState([])
  const [movieGenres, setMovieGenres] = useState(get('movieGenres') || [])
  const [tvGenres, setTVGenres] = useState(get('tvGenres') || [])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, setSearchType] = useState('movie')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const setGenres = useGeneralStorage((state) => state.setGenres)

  const fetchMovieGenres = async () => {
    const url = import.meta.env.VITE_FETCH_MODE === 'dev'
      ? '/mocks/genre_movie.json'
      : 'genre/movie/list'
    return await authFetch(url)
  }

  const fetchTVGenres = async () => {
    const url = import.meta.env.VITE_FETCH_MODE === 'dev'
      ? '/mocks/genre_tv.json'
      : 'genre/tv/list'
    return await authFetch(url)
  }

  const fetchPopular = async () => {
    const url = import.meta.env.VITE_FETCH_MODE === 'dev'
      ? '/mocks/popular.json'
      : 'movie/popular'
    return await authFetch(url)
  }


  const fetchDataForHome = async () => {
    loader.show()
    const [movieGenresResult, tvGenresResult, popularResult] = await Promise.all([fetchMovieGenres(), fetchTVGenres(), fetchPopular()])
    if (movieGenresResult.isOK) {
      set('movieGenres', movieGenresResult.data.genres)
      setMovieGenres(movieGenresResult.data.genres)
    }
    if (tvGenresResult.isOK) {
      set('tvGenres', tvGenresResult.data.genres)
      setTVGenres(tvGenresResult.data.genres)
    }
    setGenres({
      movies: movieGenresResult.data.genres,
      tv: tvGenresResult.data.genres
    })
    if (popularResult.isOK) setPopular(popularResult.data.results)
    loader.hide(1000)
  }


  const searchHandler = (query, type) => {
    setSearchQuery(query)
    setSearchType(type)
    searchItems(query, type, page)
  }

  const searchItems = async (query, type, page) => {
    loader.show()
    const url = import.meta.env.VITE_FETCH_MODE === 'dev'
      ? '/mocks/movies.json'
      : 'search/' + type + '?page=' + page + '&lang=en-US&include_adult=false&query=' + query
    const { isOK, data } = await authFetch(url)
    if (isOK) {
      setResult(data.results)
      setTotalPages(data.total_pages)
      setTotalResults(data.total_results)
      set('searchResult', data.results)
    }
    loader.hide(1000)
  }

  const viewGenresList = () => {
    if (searchType === 'person') return null

    const genresSource = searchType === 'movie' ? movieGenres : tvGenres
    return genresSource.map((genre) => <div className="chip" key={genre.id} data-id={genre.id}>{genre.name}</div>)
  }

  const typeHandler = (type) => {
    setSearchType(type)
  }

  const changePageHandler = (newPage) => {
    setPage(newPage)
    searchItems(searchQuery, searchType, newPage)
  }

  useEffect(() => {
    fetchDataForHome()
  }, [])

  return (
    <>
    <GenreContext value={{movies: movieGenres, tv: tvGenres}}>
      <div id="page-search" className="page active">
        <div className="hero-section">
          <div className="hero-bg">
            <div
              className="hero-bg-img"
              style={{
                backgroundImage:
                  'url("https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg")'
              }}
            />
            <div
              className="hero-bg-img"
              style={{
                backgroundImage:
                  'url("https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg")'
              }}
            />
            <div
              className="hero-bg-img"
              style={{
                backgroundImage:
                  'url("https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg")'
              }}
            />
            <div
              className="hero-bg-img"
              style={{
                backgroundImage:
                  'url("https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg")'
              }}
            />
            <div
              className="hero-bg-img"
              style={{
                backgroundImage:
                  'url("https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg")'
              }}
            />
          </div>
          <div className="hero-tag">Powered by TMDB API</div>
          <h1 className="hero-title">
            Find your next
            <br />
            <em>favorite film</em>
          </h1>
          <p className="hero-sub">
            Search millions of movies, TV shows and people from the world's most
            trusted database.
          </p>
          <SearchForm onSearch={searchHandler} onChangeType={typeHandler} type={searchType} />
        </div>
        {/* Filter chips */}
        {searchType !== 'person' ? 
          <div className="filter-row">
            <span className="filter-label">Genre:</span>
            <div className="chip active">All</div>
            {viewGenresList()}
          </div>
        : null}
        {/* Results */}
        <SearchResultList popular={popular} result={result} searchQuery={searchQuery} page={page} totalPages={totalPages} totalResults={totalResults} onChangePage={changePageHandler} />
      </div>
      </GenreContext>
    </>
  )
}