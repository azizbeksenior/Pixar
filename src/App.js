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
      </Routes>
    </div>
  );
}

export default App; 