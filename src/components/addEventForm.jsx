import React, {useState} from 'react';
import DaySelectList from './daySelectList';
import MonthSelectList from './monthSelectList';
import YearSelectList from './yearSelectList';

const AddEventForm = (props) => {

	const [title, setTitle] = useState('');
	const [day, setDay] = useState('');
	const [month, setMonth] = useState('');
	const [year, setYear] = useState('');
	const [category, setCategory] = useState('');
	const [notes, setNotes] = useState('');

	function hadlerAddEvent (e) {
		e.preventDefault();

		const newEvent = 
			{
			title: title,
			day: day,
			month: month,
			year: year,
			cat: category,
			notes: notes,
			id: Math.floor(Math.random() * 1000000)
		}

		props.setEvents([...props.events, {...newEvent}]);
		setTitle('');
		setDay('');
		setMonth('');
		setYear('');
		setCategory('');
		setNotes('');
	}

	return (
		<div>
		<form>
		<input 
		type="text" 
		name="eventTitle"
		value={title}
		onChange={e => setTitle(e.target.value)}
		placeholder="название"
		/>
			<select
			name="day"
			value={day}
		onChange={e => setDay(Number(e.target.value))}
		 >
			<option>Дата</option>
			<DaySelectList />
		 </select>
			<select 
			name="month"
			value={month}
			onChange={e => setMonth(Number(e.target.value))}
			>
				<option value="none">Месяц</option>
				<MonthSelectList />
			</select>
			<select name="year"
			value={year}
			onChange={e => setYear(e.target.value !== 'yearly' ? [Number(e.target.value)] : [new Date().getFullYear(), (new Date().getFullYear()+1), (new Date().getFullYear()+2)])}
			>
				<option value="yearly">Год</option>
				<YearSelectList />
				<option value="yearly">Ежегодно</option>
			</select>
<button 
onClick={hadlerAddEvent}>Добавить</button>
		</form>
		
		</div>
	)
}

export default AddEventForm;