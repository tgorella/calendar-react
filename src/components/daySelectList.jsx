import React from 'react';

const DaySelectList = () => {
	const html = [];
	for (let i = 1; i <= 31; i++) {
		html.push(<option value={i} key={'day'+i} >{i}</option>)
	}
	return html;
}

export default DaySelectList;