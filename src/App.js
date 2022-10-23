// component

import Todo from './components/Todo';
import Backdrop from './components/Backdrop';
import Modal from './components/Modal';

function App() {
  return (
    <div>
      <h2>My Todo</h2>
      <Todo text = "Learn react" />
      <Todo text = "Master react" />
      <Todo text = "Explore the real react" />
      <Modal />
      <Backdrop />
    </div>

  );
}

export default App;
