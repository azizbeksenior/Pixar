import './App.css';
import Home from './Pages/Home/Home';
import LEADERSHIP from './Pages/LEADERSHIP/LEADERSHIP';
import Inclusion from './Pages/inclusion/inclusion';
import Supplier from './Pages/supplier/supplier';
import Upcoming from './Pages/upcoming/upcoming';
import Company_faqs from './Pages/company-faqs/company-faqs';
import Story from './Pages/story/story';
import Feature from './Pages/feature/feature';
import Shorts from './Pages/shorts/shorts';
import Disneyplus from './Pages/disneyplus/disneyplus';
import Sparkshorts from './Pages/sparkshorts/sparkshorts';
import Cars_toons from './Pages/cars-toons/cars-toons';
import Toy_story_toons from './Pages/toy-story-toons/toy-story-toons';
import Home_entertainment from './Pages/home-entertainment/home-entertainment';
import USD from './Components/USD/USD';
import Renderman from './Pages/renderman/renderman';
import Pixar_building_characters from './Pages/pixar-building-characters/pixar-building-characters';
import Emotions_at_play from './Pages/emotions-at-play/emotions-at-play';
import Science_exhibition from './Pages/science-exhibition/science-exhibition';
import Pixar_in_a_box from './Pages/pixar-in-a-box/pixar-in-a-box';
import Events from './Pages/events/events';
import Careers_at_pixar from './Pages/careers-at-pixar/careers-at-pixar';
import Internships from './Pages/internships/internships';
import Life_at_pixar from './Pages/life-at-pixar/life-at-pixar';
import {Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='LEADERSHIP' element={<LEADERSHIP/>}/>
        <Route path='inclusion' element={<Inclusion/>}/>
        <Route path='supplier' element={<Supplier/>}/>
        <Route path='upcoming' element={<Upcoming/>}/>
        <Route path='company_faqs' element={<Company_faqs/>}/>
        <Route path='story' element={<Story/>}/>
        <Route path='feature' element={<Feature/>}/>
        <Route path='shorts' element={<Shorts/>}/>
        <Route path='disneyplus' element={<Disneyplus/>}/>
        <Route path='sparkshorts' element={<Sparkshorts/>}/>
        <Route path='cars_toons' element={<Cars_toons/>}/>
        <Route path='toy-story-toons' element={<Toy_story_toons/>}/>
        <Route path='home-entertainment' element={<Home_entertainment/>}/>
        <Route path='renderman' element={<Renderman/>}/>
        <Route path='USD' element={<USD/>}/>
        <Route path='pixar-building-characters' element={<Pixar_building_characters/>}/>
        <Route path='emotions-at-play' element={<Emotions_at_play/>}/>
        <Route path='science-exhibition' element={<Science_exhibition/>}/>
        <Route path='pixar-in-a-box' element={<Pixar_in_a_box/>}/>
        <Route path='events' element={<Events/>}/>
        <Route path='careers-at-pixar' element={<Careers_at_pixar/>}/>
        <Route path='internships' element={<Internships/>}/>
        <Route path='life-at-pixar' element={<Life_at_pixar/>}/>
      </Routes>
    </div>
  );
}

export default App; 