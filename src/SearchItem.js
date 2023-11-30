const SearchItem = ({search, setSearch}) => {
  
    return (
     <form className="searchForm" onSubmit={(e) => e.preventDefault}>
        <label htmlFor="search">Search</label>
        <input
            id='search'
            type="text"
            role="seachbox"
            placeholder="Search Items"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            ></input>

     </form>
    );
  };
  
  export default SearchItem;