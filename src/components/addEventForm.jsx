import React, {useState} from 'react';
import CategorySelectList from './CategorySelectList';
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


	let [active, setActive] = useState(false);

	function handlerAddEvent (e) {
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

	  const result = active 
		? <> 
			<div className='close-text' onClick={() => setActive(active = !active)}>Закрыть Х</div>
			<form>
			<input 
			type="text" 
			name="eventTitle"
			value={title}
			onChange={e => setTitle(e.target.value)}
			placeholder="Укажите название события"
			/>
			<div className='date-container'>
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
					<option>Месяц</option>
					<MonthSelectList />
				</select>
				<select name="year"
				value={year}
				onChange={e => setYear(e.target.value !== 'yearly' ? [Number(e.target.value)] : [new Date().getFullYear(), (new Date().getFullYear()+1), (new Date().getFullYear()+2)])}
				>
					<option>Год</option>
					<YearSelectList />
					<option value="yearly">Ежегодно</option>
				</select>
				</div>
				<select name="category"
				value={category}
				onChange={e => setCategory(e.target.value)}
				>
					<option>Категория</option>
					<CategorySelectList />
				</select>
				<textarea 
			type="text" 
			name="note"
			value={notes}
			onChange={e => setNotes(e.target.value)}
			placeholder="тут можно записать время и адрес или что-то еще"
			rows={4}
		>
			</textarea>
	<button 
	onClick={handlerAddEvent}>Добавить</button>
			</form>
			</>
			: <div className="open-text" onClick={() => setActive(active = !active)}>Добавить новое событие</div> 
	 return  result;
}

export default AddEventForm;