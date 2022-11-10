import React from 'react';

const MonthSelectList = () => {
	const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
	const html = [];
	for (let i = 0; i <= 11; i++) {
		html.push(<option value={i} key={'month'+i} >{monthNames[i]}</option>)
	}
	return html;
}

export default MonthSelectList;