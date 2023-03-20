import Nav_side from "./Nav_side";
import Nav_top from './Nav_top';
import Cards_array from './Card_array';
function App() {
  return (
    <div className="flex">
      <Nav_side />
      <div className=" w-[95%]">
        <Nav_top/>
        <Cards_array/>
      </div>
    </div>
  );
}

export default App;
