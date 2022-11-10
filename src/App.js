import './App.css';
import AddEventForm from './components/addEventForm';
import Calendar from './components/calendar';
import RandomNumber from './components/randomNumber';

function App() {
  return (
		<>
		<Calendar key={Math.floor(Math.random() * 1000000)}  />
		</>
  );
}

export default App;
