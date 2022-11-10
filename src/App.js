import './App.css';
import Calendar from './components/calendar';

function App() {
  return (
		<>
		<Calendar key={Math.floor(Math.random() * 1000000)}  />
		</>
  );
}

export default App;
