import React, {useState} from 'react';
import Event from './event';
import Events from '../stats/eventslist';

const EventsList = (props) => {
	// const [events, setEvents] = useState(Events);

	const thisMonthEvents = props.events.filter( (item) => {
		return item['month'] == props.activeMonth && item['year'].includes(props.activeYear)
	});

	thisMonthEvents.sort((a, b) => {
		 return a.day - b.day
	});

	return (
		thisMonthEvents.map( (item) => (
			<Event number={item.day} title={item.title} cat={item.cat} notes={item.notes} key={item.id}/>
		)
	))
}

export default EventsList;