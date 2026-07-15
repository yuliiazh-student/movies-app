import { useState } from "react";

export default function SearchForm(props) {
  const [value, setValue] = useState('')
  const [type, setType] = useState(props.type)

  const changeHandler = (e) => {
    setValue(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if(value === '') return

    props.onSearch(value, type)
  }

  const changeTypeHandler = (e) => {
    setType(e.target.value)
    props.onChangeType(e.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
    <div className="search-wrap">
      <div className="search-bar">
        <svg
          className="search-icon"
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx={11} cy={11} r={8} />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          className="search-input"
          type="search"
          placeholder="Search movies, shows, actors..."
          onChange={changeHandler}
          value={value}
        />
        <select className="search-select" value={type} onChange={changeTypeHandler}>
          <option value="movie">Movies</option>
          <option value="tv">TV Shows</option>
          <option value="person">People</option>
        </select>
        <button type="submit" className="search-btn">Search</button>
      </div>
    </div>
    </form>
  )
}