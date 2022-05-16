import ParseAccountFile from "./components/ParseAccountFile";
import file from "./input.txt";

function App() {
  return (
    <div className="App">
      <ParseAccountFile file={file} />
    </div>
  );
}

export default App;
