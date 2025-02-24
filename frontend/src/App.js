import GalleryBar from './components/GalleryBar/GalleryBar';
import GalleryPlates from './components/GalleryPlates/GalleryPlates';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//https://picsum.photos/
function App() {
  return (
    <div className="App">
      <section className="app-header">
        <h1>Gallery Photo App</h1>
      </section>
      <section className="app-main">
        <GalleryBar />
        <GalleryPlates />
      </section>
    </div>
  );
}

export default App;
