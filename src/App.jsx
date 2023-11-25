import AnimalsList from './assets/components/animals/AnimalsList'
import animals from "./assets/data/animals";
import './App.css'
import './assets/components/animals/Animals.scss';
import GalleryObserver from './assets/components/galleryObserver/GalleryObserver';

function App() {

  return (
    <>
    {/* Das Array "animals" wird an AnimalsList übergeben und dort mit animalsArr.map iteriert */}
    <AnimalsList animalsArr={animals}/>
    <GalleryObserver />
    </>
  )
}

export default App
