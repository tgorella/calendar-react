import React from "react";

const Event = (props) => {
return (
	<div className={('events-item ' + props.cat)}>
		<div>{props.number}</div>
		<div>
			<h3>{props.title}</h3>
			{props.notes && <textarea 
			value={props.notes}
			onChange={(e) => console.log('click')}
			></textarea>}
		</div>
	</div>
);
}

export default Event;