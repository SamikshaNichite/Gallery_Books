const Books = (props) => {
  return (
    <div className="book-card">
      <img
        src={props.image}  // must match the prop name
        alt={props.bookName}
        className="book-img"
      />
      <div className="book-info">
        <p><strong>{props.bookName}</strong></p>
        <p><strong>Author:</strong> {props.author}</p>
        <p><strong>Published:</strong> {props.published}</p>
      </div>
    </div>
  );
};

export default Books;
