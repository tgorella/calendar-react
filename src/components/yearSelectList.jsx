import React from 'react';

const YearSelectList = () => {
	const todayIs = new Date();
	const todayYear = todayIs.getFullYear();
	const html = [];
	for (let i = 0; i < 5; i ++) {
		html.push(<option value={todayYear + i} key={'year'+i}>{todayYear + i}</option>)
	}
	return html
}

export default YearSelectList;