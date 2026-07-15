// import { useContext } from "react"
import { formatDate } from "../helpers/functions"
// import { GenreContext } from "../pages/Home"
import { Link } from "react-router"
import noPoster from './../assets/images/no-poster.png'
import { useGeneralStorage } from "../storage"
import { toast } from "react-toastify"
import useStorage from "../hooks/useStorage"
import authFetch from "../helpers/authFetch"

export default function MovieItem(props) {
  const item = props.item
  const { genres, isAuth } = useGeneralStorage()
  const { get, del } = useStorage('local')

  const type = item.hasOwnProperty('title')
    ? 'movie'
    : item.hasOwnProperty('gender')
      ? 'person'
      : 'tv'

  const unifiedFields = {
    movie: {
      title: item.title,
      poster: item.poster_path,
      date: item.release_date,
      link: '/detail/' + item.id
    },
    tv: {
      title: item.name,
      poster: item.poster_path,
      date: item.first_air_date,
      link: '/detail/' + item.id
    },
    person: {
      title: item.name,
      poster: item.profile_path,
      date: null,
      link: '/person/' + item.id
    }
  }

  // const genres = useContext(GenreContext)
  const viewGenresList = () => {
    return item.genre_ids.map((id) => {
      let genre = genres.movies.find((g) => g.id === id)
      if (!genre) {
        genre = genres.tv.find((g) => g.id === id)
      }
      if (!genre) return null
      return <span class="tag">{genre.name}</span>
    })
  }

  const addFavHandler = async (e) => {
    e.stopPropagation()
    if (!isAuth) {
      return toast.info('You must be authorized to add items to the favorite list')
    }

    const id = e.target.dataset.id
    const account = get('account')
    const {isOK, data} = await authFetch(`account/${account.id}/favorite`, 'POST', {
      "media_type": type,
      "media_id": id,
      "favorite": props.isAddFavotite
    })
    if(isOK){
      //TODO: update stored fav list for movies and TV
      toast.success(`The ${type} "${e.target.dataset.title}" successfully ${props.isAddFavotite ? 'added to' : 'removed from'} your favorites.`)
    } else {
      toast.error('Some error occured while '+type+' adding to you favorites.')
    }
    
  }

  return (
    <div className="movie-card">
      {type !== 'person' ? <button onClick={addFavHandler} className="poster-bookmark" data-id={item.id} data-title={unifiedFields[type].title}>
        <svg
          width={13}
          height={13}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </button> : null}
      <Link to={unifiedFields[type].link}>
        <div className="movie-poster">
          <img
            className="poster-img"
            src={unifiedFields[type].poster ? 'https://image.tmdb.org/t/p/w500' + unifiedFields[type].poster : noPoster}
            alt={unifiedFields[type].title}
          />
          {item.vote_average ? <div className="poster-badge">
            <svg
              width={11}
              height={11}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {item.vote_average.toFixed(1)}
          </div> : null}

        </div>
        <div className="movie-info">
          <div className="movie-title">{unifiedFields[type].title}</div>
          {type !== 'person' ? <><div className="movie-year">{formatDate(unifiedFields[type].date)}</div>
          <div className="movie-tags">
            {viewGenresList()}
          </div>
          </> : null }
        </div>
      </Link>
    </div>
  )
}