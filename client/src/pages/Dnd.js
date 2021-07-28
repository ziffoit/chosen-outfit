import React, { useEffect, useState } from 'react';
import '../components/DnD/dnd.css';
import DragNDrop from '../components/DnD/dnd'

const data = [
	{ title: 'group 1', items: ['1', '2'] },
	{ title: 'group 2', items: ['3', '4', '5'] },
	{ title: 'group 3', items: ['6', '7', '8'] }
]

function Drag() {
	// const [data, setData] = useState();
	// useEffect(() => {
	// 	if (localStorage.getItem('List')) {
	// 		console.log(localStorage.getItem('List'))
	// 		setData(JSON.parse(localStorage.getItem('List')))
	// 	} else {
	// 		setData(defaultData)
	// 	}
	// }, [setData])
	return (
		<div className="App-dnd">
			<header className="App-dnd-header">
				<DragNDrop data={data} />
			</header>
		</div>
	);
}

export default Drag;



{/* <div className="drag-n-drop">
					{data.map((grp, grpI) => (
						<div key={grp.title} className="dnd-group">
							{grp.items.map((item, itemI) => (
								<div draggable key={item} className="dnd-item">
									{item}
								</div>
							))}
						</div>
					))}
				</div> */}

{/* <div className="drag-n-drop">
					<div className="dnd-group">
						<div className="group-title">Group 1</div>
						<div className="dnd-item">
							<div>
								<p>ITEM 1</p>
							</div>
						</div>
						<div className="dnd-item">
							<div>
								<p>ITEM 2</p>
							</div>
						</div>
						<div className="dnd-item">
							<div>
								<p>ITEM 3</p>
							</div>
						</div>
					</div>
					<div className="dnd-group">
						<div className="group-title">Group 1</div>
						<div className="dnd-item">
							<div>
								<p>ITEM 1</p>
							</div>
						</div>
						<div className="dnd-item">
							<div>
								<p>ITEM 2</p>
							</div>
						</div>
					</div>
				</div> */}