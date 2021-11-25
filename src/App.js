import './App.css';
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  return (
    <div className="App">
        <NavBar texto={'Se manda desde app'}/>
        <ItemListContainer greeting="Bienvenido a mi tienda" />
    </div>
  );
}

export default App;
