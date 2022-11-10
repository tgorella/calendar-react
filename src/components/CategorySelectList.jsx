import React from 'react';

const CategorySelectList = () => {
	const categoryNames = ['Личное','Семья','Работа','Друзья','Праздники', 'Ребенок', 'Учеба']
	const categoryValues = ['personal', 'family', 'work', 'friends', 'holidays', 'children', 'school']
	const html =	categoryNames.map((item, index) => 
		<option value={categoryValues[index]} key={'category'+index} >{item}</option>
)
	return html;
}

export default CategorySelectList;