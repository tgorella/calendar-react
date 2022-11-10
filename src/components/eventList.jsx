import React, {useState} from 'react';
import Event from './event';
import Events from '../stats/eventslist';

const EventsList = (props) => {
	const [events, setEvents] = useState(Events);

	const thisMonthEvents = events.filter( (item) => {
		return item['date']['month'] == props.activeMonth && item['date']['year'] == props.activeYear
	});

	thisMonthEvents.sort((a, b) => {
		 return a.date.day - b.date.day
	});

	return (
		thisMonthEvents.map( (item) => (
			<Event number={item.date.day} title={item.title} cat={item.cat} notes={item.notes} key={item.id}/>
		)
	))
}

export default EventsList;