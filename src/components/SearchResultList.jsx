import Pagination from "./generic/Pagination"
import MovieItem from "./MovieItem"

export default function SearchResultList(props) {
  const { popular, result, searchQuery, page, totalPages, totalResults, onChangePage } = { ...props }
  const PER_PAGE = 20
  const fromItem = ((page - 1) * PER_PAGE) + 1
  const toItem = page * PER_PAGE > totalResults ? totalResults : page * PER_PAGE
  return (
    <div className="results-section">
      <div className="section-header">
        {searchQuery && result.length ? <>
          <div>
            <div className="section-title">Search results</div>
            <div className="section-meta" style={{ marginTop: 4 }}>
              Showing {fromItem} to {toItem} of {totalResults} results for "{searchQuery}"
            </div>
          </div>
          <select className="sort-select">
            <option>Sort by: Popularity</option>
            <option>Sort by: Rating</option>
            <option>Sort by: Release Date</option>
            <option>Sort by: Title</option>
          </select>
        </> : null}

      </div>

      <div className="movie-grid">
        {/* Card 1 */}
        {result.length === 0 && popular.map(movie => (
          <MovieItem item={movie} key={movie.id} isAddFavotite={true} />))}

        {result.map(movie => (
          <MovieItem item={movie} key={movie.id} isAddFavotite={true} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} goToPage={(p)=>onChangePage(p)} />
    </div>
  )
}