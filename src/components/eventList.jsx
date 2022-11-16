import React, {useState} from 'react';
import Event from './event';

const EventsList = (props) => {

	const thisMonthEvents = props.events.filter( (item) => {
		return item['month'] == props.activeMonth && item['year'].includes(props.activeYear)
	});

	thisMonthEvents.sort((a, b) => {
		 return a.day - b.day
	});

	return (
		thisMonthEvents.map( (item) => (
			<Event onDelete={props.onDelete} id={item.id} number={item.day} title={item.title} cat={item.cat} notes={item.notes} key={item.id}/>
		)
	))
}

export default EventsList;