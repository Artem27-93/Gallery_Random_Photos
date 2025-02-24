import GalleryBar from './components/GalleryBar/GalleryBar';
import GalleryPlates from './components/GalleryPlates/GalleryPlates';
import Error from './components/Error/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//https://picsum.photos/
function App() {
  return (
    <div className="App">
      <section className="app-header">
        <h2>Gallery Photo App</h2>
      </section>
      <section className="app-main">
        <GalleryBar />
        <GalleryPlates />
      </section>
      <Error />
    </div>
  );
}

export default App;
