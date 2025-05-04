import Bio from "./components/Bio";
import Gallery, { Admin, Button } from "./components/Gallery";

function App() {
  return (
    <div>
      <div>
        <Gallery />
        <Admin />
        <Button />
        <Bio />
      </div>
    </div>
  );
}

export default App;
