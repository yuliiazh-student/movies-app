export default function Pagination(props){
  const {page, totalPages, goToPage} = {...props}
  let showFirst = true
  let showLast = true

  const SIZE = 3
  let from = 1
  let to = totalPages
  if (totalPages <= SIZE + 1) {
    showFirst = showLast = false
  } else {
    if (page >= 1 && page <= SIZE - 1) {
      to = SIZE
      showFirst = false
    } else if (page === SIZE){
      to = SIZE + 1
      showFirst = false
    } else if (page >= SIZE && page < totalPages - (SIZE - 1)) {
      from = page - Math.floor(SIZE / 2)
      to = page + Math.floor(SIZE / 2)
    } else if (page > totalPages - (SIZE - 1)) {
      from = totalPages - (SIZE - 1)
      showLast = false
    } else if(page === totalPages - (SIZE - 1)){
      from = totalPages - SIZE
      showLast = false
    }
  }

  const viewPagesList = () => {
    const list = []
    for (let i = from; i <= to; i++) {
      list.push(page === i
        ? <li key={i}><span className="page-active">{i}</span></li>
        : <li key={i}><button className="page-btn" onClick={()=>goToPage(i)}>{i}</button></li>
      )
    }
    return list
  }

  if(totalPages === 0) return null

  return (
    <ul className="pagination" data-first={showFirst} data-last={showLast}>
      <li>
      <button className="page-btn" disabled={page == 1} onClick={()=>goToPage(page-1)}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
    </li>
    {showFirst ? <><li>
        <button className="page-btn" onClick={()=>goToPage(1)}>1</button>
      </li>
      <li>
        <span className="page-sep">…</span>
      </li></>: null}
    {viewPagesList()}  

    {showLast ? <>
    <li>
        <span className="page-sep">…</span>
      </li>
      <li>
        <button className="page-btn" onClick={()=>goToPage(totalPages)}>{totalPages}</button>
      </li>
    </> : null}

    <li>
      <button className="page-btn" disabled={page == totalPages} onClick={()=>goToPage(page+1)}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </li>
    </ul>
  )
}