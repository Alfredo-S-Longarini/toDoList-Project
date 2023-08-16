import './App.css'
import NavBar from './components/NavBar/NavBar';
import NotesListContainer from './components/NotesListContainer/NotesListContainer';

function App() {

  return (
    <div className='appContainer grid'>
        <NavBar/>

        <NotesListContainer/>
    </div>
  )
}

export default App;
