import Nav_side from "./Nav_side";
import Nav_top from './Nav_top'
function App() {
  return (
    <div className="flex">
      <Nav_side />
      <div className="">
        <Nav_top/>
      </div>
    </div>
  );
}

export default App;
