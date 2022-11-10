import React, {useState} from 'react';
import Events from '../stats/eventslist';
import EventsList from './eventList';
import AddEventForm from './addEventForm';


const Calendar = () => {
	const [events, setEvents] = useState(Events);
	
	const todayIs = new Date();
	const [monthNumber, setMonthNumber] = useState(todayIs.getMonth());
	const [yearNumber, setYearNumber] = useState(todayIs.getFullYear());
	const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
	const date = new Date(yearNumber, monthNumber, 1);
	const monthStart = date.getDay();

	const thisMonthEvents =events.filter( (item) => {
		return item['month'] == monthNumber && item['year'].includes(yearNumber)
	});
	const daysWithEvents = [];
	thisMonthEvents.forEach( (item) => {
		daysWithEvents.push(item.day)
	})

	function upMonth () {
		setMonthNumber(monthNumber + 1)
		setMonthNumber((prevState) => prevState === 12 ? prevState = 0 : prevState)
		setYearNumber((prevState) => monthNumber === 11 ? prevState + 1 : prevState)
	}

	function downMonth () {
		setMonthNumber(monthNumber - 1)
		setMonthNumber((prevState) => prevState === -1 ? prevState = 11 : prevState)
		setYearNumber((prevState) => monthNumber === 0 ? prevState - 1 : prevState)
	}

	const CalendarHTML = () => {
		const html = [];
		if (monthStart === 0) {
			for (let i = 0; i< 6; i++) {
				html.push(<div key={'e'+i}></div>);
			}
		}
		if (monthStart === 2 || monthStart === 3 || monthStart === 4 || monthStart === 5 || monthStart === 6) {
			for (let i = 0; i< monthStart - 1; i++) {
				html.push(<div key={'e'+i}></div>);
			}
		}
		
		if ( monthNumber === 0 || monthNumber === 2 || monthNumber === 4 || monthNumber === 6 || monthNumber === 7 || monthNumber === 9 || monthNumber === 11) {
			for (let i = 1; i <= 31; i++) {
				daysWithEvents.includes(i) 
				? html.push(<div className="mark" key={'d'+i} id={i}>{i}</div>)
				: html.push(<div key={'d'+i} id={i}>{i}</div>);
			}
		}
		if (monthNumber === 1 && yearNumber % 4 === 0) {
			for (let i = 1; i <= 29; i++) {
				daysWithEvents.includes(i) 
				? html.push(<div className="mark" key={'d'+i} id={i}>{i}</div>)
				: html.push(<div key={'d'+i} id={i}>{i}</div>);
			} 
			}
			if (monthNumber === 1 && yearNumber % 4 !== 0) {
				for (let i = 1; i <= 28; i++) {
					daysWithEvents.includes(i) 
				? html.push(<div className="mark" key={'d'+i} id={i}>{i}</div>)
					: html.push(<div key={'d'+i} id={i}>{i}</div>);
				} 
			}
			if ( monthNumber === 3 || monthNumber === 5 || monthNumber === 8 || monthNumber === 10 ) {
				for (let i = 1; i <= 30; i++) {
					daysWithEvents.includes(i) 
				? html.push(<div className="mark" key={'d'+i} id={i}>{i}</div>)
				:	html.push(<div key={'d'+i} id={i}>{i}</div>);
				}
			}
			return html;
	}

	return (
		<>
			<AddEventForm key={Math.floor(Math.random() * 1000000)} events={events} setEvents={setEvents}/>
		<div className='month-container'>
		<div className="button-container">
			<button id="prev-month" onClick={downMonth}>&lt;</button>
				<div className="month-title">
					<h3>{monthNames[monthNumber]} {yearNumber}</h3>
				</div>
			<button id="next-month" onClick={upMonth}>&gt;</button>
		</div>
		< CalendarHTML key={Math.floor(Math.random() * 1000000)}/>
		</div>
  	<EventsList events={events} activeMonth={monthNumber} activeYear={yearNumber} key={Math.floor(Math.random() * 1000000)} />
		</>
	)
}

export default Calendar;