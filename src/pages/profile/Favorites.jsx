import { useEffect, useState } from "react"
import authFetch from "../../helpers/authFetch"
import useStorage from "../../hooks/useStorage"
import MovieItem from "../../components/MovieItem"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import 'react-tabs/style/react-tabs.css';


export default function Favorites() {
  const { get, set } = useStorage('local')
  const account = get('account')
  const [favMovies, setFavMovies] = useState([])
  const [favTVs, setFavTVs] = useState([])

  const fetchFavoriteMovies = async () => {
    const storedMovies = get('favMovies')
    if(storedMovies) return setFavMovies(storedMovies)

    const { isOK, data } = await authFetch(`account/${account.id}/favorite/movies`)
    if (isOK) {
      set('favMovies', data.results)
      setFavMovies(data.results)
    }
  }

  const fetchFavoriteTV = async () => {
    const storedTVs = get('favTVs')
    if(storedTVs) return setFavTVs(storedTVs)

    const { isOK, data } = await authFetch(`account/${account.id}/favorite/tv`)
    if (isOK) {
      set('favTVs', data.results)
      setFavTVs(data.results)
    }
  }

  useEffect(() => {
    fetchFavoriteMovies()
  }, [])

  return (
    <>
      <h2>Favorites movies</h2>
      <div className="results-section">
        <Tabs>
          <TabList>
            <Tab>Movies</Tab>
            <Tab onClick={fetchFavoriteTV}>TV</Tab>
          </TabList>

          <TabPanel>
            <div className="movie-grid">
              {favMovies.map(movie => (
                <MovieItem item={movie} key={movie.id} isAddFavotite={false} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="movie-grid">
              {favTVs.map(movie => (
                <MovieItem item={movie} key={movie.id} isAddFavotite={false} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
        
      </div>
    </>
  )
}