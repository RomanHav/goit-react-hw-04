export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <form>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" onSubmit={onSubmit}>
          Search
        </button>
      </form>
    </header>
  );
}
