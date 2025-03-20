import { Gallery, Leftbar, Topbar } from "./components/index";

function App() {
  return (
    <>
      <div className="w-full flex gap-4">
        <Leftbar />
        <div className="flex-1 mr-4">
          <Topbar />
          <Gallery />
        </div>
      </div>
    </>
  );
}

export default App;
