const Filter = (filter, setFilter, setSort) => {
  return (
    <div className="filter">
      <h2>Filtrar</h2>
      <div className="filter-options">
        <div>
            <p>Status:</p>
            <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
                <option value="All">Todas</option>
                <option value="Complete">Complete</option>
                <option value="Incomplete">Incomplete</option>
            </select>
        </div>
      </div>
      <div>
        <p>Ordem alfabetica</p>
        <button onClick={()=>setSort("Asc")}>Asc</button>
        <button onClick={()=>setSort("Des")}>Des</button>
      </div>
    </div>
  )
}

export default Filter
