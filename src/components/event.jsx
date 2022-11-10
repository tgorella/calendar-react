import React from "react";

const Event = (props) => {
return (
	<div className={('events-item ' + props.cat)}>
		<div>{props.number}</div>
		<div>
			<h3>{props.title}</h3>
			{props.notes && 
			<div className="note">{props.notes}</div>}
		</div>
	</div>
);
}

export default Event;