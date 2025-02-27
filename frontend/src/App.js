import GalleryBar from './components/GalleryBar/GalleryBar';
import GalleryPlates from './components/GalleryPlates/GalleryPlates';
import Error from './components/Error/Error';
import ModalFullScreenView from './components/ModalFullScreenView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="app-header">
        <h2 className="h2-custom">Gallery Random Photos</h2>
        <hr className="hr-custom" />
        <GalleryBar />
      </section>
      <section className="app-main">
        <GalleryPlates />
      </section>
      <ModalFullScreenView />
      <Error />
    </div>
  );
}

export default App;
