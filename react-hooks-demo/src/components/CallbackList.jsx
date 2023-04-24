import { useState, useEffect } from 'react';

const CallbackList = ({ getItems }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		if (!getItems) return;

		setItems(getItems);
		console.log('Updating Items');
	}, [getItems]);

	return items.map(item => <div key={item}>{item}</div>);
};
export default CallbackList;
