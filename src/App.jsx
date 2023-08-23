import './App.css'
import NavBar from './components/NavBar/NavBar';
import NotesListContainer from './components/NotesListContainer/NotesListContainer';

function App() {

  return (
    <div className='appContainer'>
      <div>
        < NavBar />
      </div>

      <div>
        <NotesListContainer />
      </div>

    </div>
  )
}

export default App;
