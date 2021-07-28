import React, { useEffect, useState } from 'react';
import '../components/DnD/dnd.css';
import DragNDrop from '../components/DnD/dnd';
// import { QUERY_USER } from '../utils/queries';
// import { useQuery } from '@apollo/client';

const defaultData = [
	{ title: 'My Clothes', items: ['1', '2'] },
	{ title: 'Day Outfit', items: ['3', '4', '5'] },
	{ title: 'Clubbin Outfit', items: ['6', '7', '8'] }
]


function Drag() {
	const [data, setData] = useState();

	useEffect(() => {
		if (localStorage.getItem('List')) {
			console.log(localStorage.getItem('List'))
			setData(JSON.parse(localStorage.getItem('List')))
		} else {
			setData(defaultData)
		}
	}, [setData])

	return (
		<div className="App-dnd">
			<header className="App-dnd-header">
				<DragNDrop data={data} />
			</header>
		</div>
	);
}

export default Drag;
