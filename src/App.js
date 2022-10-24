// component
import { Route } from 'react-router-dom'; 
import AllMeetupsPage from './pages/AllMeetups.js';
import NewMeetupPage from './pages/NewMeetup.js';
import FavoritesPage from './pages/Favorites.js';

function App() {
  // Current dom localhost:3000
  // actual server could use the path like my-page.com......
  return (
    <div>
      <Route path = '/'>
        <AllMeetupsPage />
      </Route>

      {/* <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      
      <Route path='/favorites'>
        <FavoritesPage />
      </Route> */}
      
    </div>

  );
}

export default App;
