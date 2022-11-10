import React, {useState} from 'react';
import EventsList from './eventList';


const Calendar = () => {
	const id = Date.now();
	const todayIs = new Date();
	const [monthNumber, setMonthNumber] = useState(todayIs.getMonth());
	const [yearNumber, setYearNumber] = useState(todayIs.getFullYear());
	const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
	const date = new Date(yearNumber, monthNumber, 1);
	const monthStart = date.getDay();


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

	function generateCalendarHTML () {
		const html = [];
		if (monthStart === 0) {
			for (let i = 0; i< 6; i++) {
				html.push(<><div key={'e'+i}></div></>);
			}
		}
		if (monthStart === 2 || monthStart === 3 || monthStart === 4 || monthStart === 5 || monthStart === 6) {
			for (let i = 0; i< monthStart - 1; i++) {
				html.push(<><div key={'e'+i}></div></>);
			}
		}
		
		if ( monthNumber === 0 || monthNumber === 2 || monthNumber === 4 || monthNumber === 6 || monthNumber === 7 || monthNumber === 9 || monthNumber === 11) {
			for (let i = 1; i <= 31; i++) {
				html.push(<><div key={'e'+i}>{i}</div></>);
			}
		}
		if (monthNumber === 1 && yearNumber % 4 === 0) {
			for (let i = 1; i <= 29; i++) {
				html.push(<><div key={'e'+i}>{i}</div></>);
			} 
			}
			if (monthNumber === 1 && yearNumber % 4 !== 0) {
				for (let i = 1; i <= 28; i++) {
					html.push(<><div key={'e'+i}>{i}</div></>);
				} 
			}
			if ( monthNumber === 3 || monthNumber === 5 || monthNumber === 8 || monthNumber === 10 ) {
				for (let i = 1; i <= 30; i++) {
					html.push(<><div key={'e'+i}>{i}</div></>);
				}
			}
			return html;
	}

	return (
		<React.Fragment key={id}>
		<div className='month-container'>
		<div className="button-container"><button id="prev-month" onClick={downMonth}>&lt;</button><div className="month-title"><h3>{monthNames[monthNumber]} {yearNumber}</h3></div><button id="next-month" onClick={upMonth}>&gt;</button></div>
		{ generateCalendarHTML()}
		</div>
    <EventsList activeMonth={monthNumber} activeYear={yearNumber} />
		</React.Fragment>
	)
}

export default Calendar;