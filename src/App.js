// component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import MainNav from './components/layout/MainNav';

function App() {
  return (
    <div>
        <BrowserRouter>
        <MainNav />
          <Routes>
            <Route path='/' element={<AllMeetupsPage/>}/>
            <Route path='/new-meetup' element={<NewMeetup/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
          </Routes>
        </BrowserRouter>
    </div>

  );
}

export default App;
