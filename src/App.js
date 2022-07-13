import CrudApp from "./components/CrudApp.js";
import SongSearch from "./components/SongSearch.js";
import CrudApi from "./components/CrudApi.js";

function App() {
  return (
    <>
      <h1>Ejercicios react</h1>
      <hr />
      
      <SongSearch></SongSearch>
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
