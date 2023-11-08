import AddItemForm from "./AddItems";
import ItemList from "./ItemList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CRUD App with React</h1>
        <AddItemForm/>
        <ItemList />
      </header>
    </div>
  );
}

export default App;