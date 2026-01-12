import './App.css';
import Header from './Header';
import Books from './Books';
import Data from './Data.json';

function App() {
  return (
    <>
      <Header />
      <div className="Main">
  {Data.map((book) => (
    <Books
      key={book.id}
      bookName={book.bookName}
      author={book.author}
      published={book.published}
      image={book.image}
    />
  ))}
</div>
    
    </>
  );
}

export default App;
