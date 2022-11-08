// component
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import MainNav from './components/layout/MainNav';
=======
import { Route } from 'react-router-dom'; 
import AllMeetupsPage from './pages/AllMeetups.js';
import NewMeetupPage from './pages/NewMeetup.js';
import FavoritesPage from './pages/Favorites.js';
>>>>>>> d3051f6d7e8668e9e78f5981753f6bf9967f995b

function App() {
  // Current dom localhost:3000
  // actual server could use the path like my-page.com......
  return (
    <div>
<<<<<<< HEAD
        <BrowserRouter>
        <MainNav />
          <Routes>
            <Route path='/' element={<AllMeetupsPage/>}/>
            <Route path='/new-meetup' element={<NewMeetup/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
          </Routes>
        </BrowserRouter>
=======
      <Route path = '/'>
        <AllMeetupsPage />
      </Route>

      {/* <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      
      <Route path='/favorites'>
        <FavoritesPage />
      </Route> */}
      
>>>>>>> d3051f6d7e8668e9e78f5981753f6bf9967f995b
    </div>

  );
}

export default App;
