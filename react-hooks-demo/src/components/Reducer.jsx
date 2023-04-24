import { useState, useReducer } from 'react';

/*
- Simple example of useReducer

const ACTIONS = {
	INCREMENT: 'increment',
	DECREMENT: 'decrement',
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			return { count: state.count + 1 };
		case ACTIONS.DECREMENT:
			return { count: state.count - 1 };
		default:
			return state;
	}
};
*/

const ACTIONS = {
	ADD: 'add',
	TOGGLE: 'toggle',
	DELETE: 'delete',
};

const reducer = (todos, action) => {
	switch (action.type) {
		case ACTIONS.ADD:
			return [
				...todos,
				{ id: Date.now(), name: action.payload.name, complete: false },
			];
		case ACTIONS.TOGGLE:
			return todos.map(todo => {
				if (todo.id === action.payload.id) {
					return { ...todo, complete: !todo.complete };
				}

				return todo;
			});
		case ACTIONS.DELETE:
			return todos.filter(todo => todo.id !== action.payload.id);
		default:
			return todos;
	}
};

const Reducer = () => {
	//const [state, dispatch] = useReducer(reducer, { count: 0 });
	const [name, setName] = useState('');
	const [todos, dispatch] = useReducer(reducer, []);

	const handleSubmit = e => {
		e.preventDefault();

		dispatch({ type: ACTIONS.ADD, payload: { name } });
		setName('');
	};

	const toggleTodo = id => dispatch({ type: ACTIONS.TOGGLE, payload: { id } });
	const deleteTodo = id => dispatch({ type: ACTIONS.DELETE, payload: { id } });

	return (
		<>
			{/* <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
			<span>{state.count}</span>
			<button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button> */}
			<form onSubmit={handleSubmit}>
				<input type='text' value={name} onChange={e => setName(e.target.value)} />
			</form>
			{todos.map(todo => (
				<div key={todo.id}>
					<span style={{ color: todo.complete ? '#AAA' : '#000' }}>
						{todo.name}
					</span>
					<button onClick={() => toggleTodo(todo.id)}>Toggle</button>
					<button onClick={() => deleteTodo(todo.id)}>Delete</button>
				</div>
			))}
		</>
	);
};

export default Reducer;
