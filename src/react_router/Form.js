const Form = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        type="text"
        placeholder="Search Posts"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default Form;
