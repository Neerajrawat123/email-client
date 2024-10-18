function Filters({ filter, changeFilter }) {
  return (
    <div className="flex text-xl font-medium">
      <div>
        <span>Filter by:</span>
      </div>
      <div className="flex ml-6 gap-5">
        <button
          value="read"
          className={`capitalize ${filter === "read" && "bg-filter-button"}`}
        >
          read
        </button>
        <button value="unread" className="capitalize bg-filter-button">
          unread
        </button>
        <button value="favourite" className="capitalize">
          favourite
        </button>
      </div>
    </div>
  );
}

export default Filters;
