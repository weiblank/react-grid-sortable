/*
 * @Author: weiyayun
 * @Date: 2022-07-13 14:08:24
 * @Interface:
 * @Description:
 */
// import Sortablejs from "./pages/Sortablejs";
import ReactSortable from "./pages/ReactSortable";
// import ReactGridLayout from "./pages/ReactGridLayout";
import "./App.css";
function App() {
  return (
    <div className="App">
      {/* <Sortablejs /> */}
      <ReactSortable />
      {/* <ReactGridLayout /> */}
    </div>
  );
}

export default App;
