import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import AppHeader from "../app-header";
import PostAddForm from "../post-add-form";
import PostList from "../post-list";
import PostStatusFilter from "../post-status-filter";
import SearchPanel from "../search-panel";

import './app.css';

const App = () => {

	const defaultValue = [
		{label: 'Going to learn React', important: true, like: false, id: 1},
		{label: 'That is so good', important: false, like: false,  id: 2},
		{label: 'I need a break...', important: false, like: false, id: 3},
		{label: 'I`m chiling...', important: false, like: false, id: 4}
	];
			
	const [data, setData] = useLocalStorage("data", defaultValue);

	const [maxID, setMaxID] = useState(5);

	const [term, setTerm] = useState('');

	const [filter, setFilter] = useState('all');

	// const data = [
	// 	{label: 'Going to learn React', important: true, id: 'weds'},
	// 	{label: 'That is so good', important: false,  id: 'sdwa'},
	// 	{label: 'I need a break...', important: false, id: 'asdw'},
	// 	{label: 'I`m chiling...', important: false, id: 'swdz'}
	// ];

	const onDelete = (id) => {
		console.log(id);
		const index = data.findIndex(elem => elem.id === id);
		const before = data.slice(0, index);
		const after = data.slice(index + 1);
		const newArr = [...before, ...after];
		setData(newArr);
	}

	const onAdd = (body) => {
		console.log(body);

		const newItem = {
			label: body, 
			important: false,
			id: maxID
		}

		setMaxID(maxID + 1);

		//data.push(newItem);
		const newArr = [...data, newItem]
		setData(newArr);
	}

	const onToggleImportant = (id) => {
		console.log(`Important ${id}`);
		const index = data.findIndex(elem => elem.id === id);
		const old = data[index];
		const newItem = { ...old, important: !old.important }

		const before = data.slice(0, index);
		const after = data.slice(index + 1);
		const newArr = [...before, newItem, ...after];
		setData(newArr);
	}

	const onToggleLiked = (id) => {
		console.log(`Like ${id}`);
		const index = data.findIndex(elem => elem.id === id);
		const old = data[index];
		const newItem = { ...old, like: !old.like }

		const before = data.slice(0, index);
		const after = data.slice(index + 1);
		const newArr = [...before, newItem, ...after];
		setData(newArr);
	}

	const searchPost = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			const formatTerm = term.toLocaleLowerCase();
			const formatItem = item.label.toLocaleLowerCase();
			return formatItem.indexOf(formatTerm) > -1;
		});
	}

	const filterPost = (items, filter) => {
		if(filter === 'like') {
			return items.filter(item => item.like);
		}
		else if (filter === 'all') {
			return items;
		}
		//если фильтер равен like
		//то ми фильтруем посты и возвращем те у которых like=true
		//иначе если фильтер равен all
		//вернуть items
	}

	const likes = data.filter(item => item.like).length;
	const allPosts = data.length;

	// const visiblePosts = searchPost(data, term);
	// const filterPosts = filterPost(visiblePosts, filter);
	const visiblePosts = filterPost(searchPost(data, term), filter);
	
	return (
		<div className="app">
			<AppHeader 
				likes={likes}
				allPosts={allPosts}
			/>
			<div className="search-panel d-flex">
				<SearchPanel
					onUpdateSearch={setTerm}
				/>
				<PostStatusFilter
					filter={filter}
					onFilterSelect={setFilter}
				/>
			</div>
			<PostList 
				onDelete={onDelete} 
				posts={visiblePosts} 
				onToggleImportant={onToggleImportant} 
				onToggleLiked={onToggleLiked}
			/>
			<PostAddForm onAdd={onAdd}/>
		</div>
	);
}

export default App;