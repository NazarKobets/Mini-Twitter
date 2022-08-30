import React, { useState } from "react";
import './search-panel.css';

const SearchPanel = ({onUpdateSearch}) => {

	const [term, setTerm] = useState('');

	const onValueChange = (e) => {
		const term = e.target.value;
		setTerm(term);
		onUpdateSearch(term);
	}

	return (
		<input
			className="form-controll search-input"
			type="text"
			placeholder="Поиск по записям"
			onChange={onValueChange}
			value={term}
		/>
	);
}

export default SearchPanel;