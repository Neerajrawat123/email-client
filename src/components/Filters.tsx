function Filters({ currFilter, changeFilter }) {
  function handleclick(e) {
    changeFilter(e.target.value);
  }
  return (
    <div className="flex text-xl font-medium">
      <div>
        <span>Filter by:</span>
      </div>
      <div className="flex ml-6 ">
        <button
          value="read"
          className={`capitalize  px-4 py-1 ${currFilter === "read" && "bg-filter-button border border-brdr rounded-3xl"}`}
          onClick={(e) => handleclick(e)}
        >
          read
        </button>
        <button
          value="unread"
          className={`capitalize  px-4 py-1 ${currFilter === "unread" && "bg-filter-button border border-brdr rounded-3xl"}`}
          onClick={(e) => handleclick(e)}
        >
          unread
        </button>
        <button
          value="favourite"
          className={`capitalize  px-4 py-1 ${currFilter === "favourite" && "bg-filter-button border border-brdr  rounded-3xl"}`}
          onClick={(e) => handleclick(e)}
        >
          favourite
        </button>
      </div>
    </div>
  );
}

export default Filters;
