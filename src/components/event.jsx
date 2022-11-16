import React from "react";

const Event = (props) => {
return (
	<div className={('events-item ' + props.cat)} id={props.id}>
		<div>{props.number}</div>
		<div>
			<h3>{props.title}</h3>
			{props.notes && 
			<div className="note">{props.notes}</div>}
		</div>
		<div className="delete" onClick={() => props.onDelete(props.id)}><span>X</span></div>
	</div>
);
}

export default Event;