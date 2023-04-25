# React Hooks

This repository contains a collection of React Hooks and Custom Hooks to help teach the basics of React Hooks.

Both projects were created using Vite with the following command:

```bash
npm create vite@latest
```

Hooks are presented in order of relevance (i.e., how often they are used).

## useState

useState is a hook that allows you to add state to functional components.

```javascript
const [count, setCount] = useState(0);
```

If you want to update the state, you can use the setCount function.

```javascript
setCount(count + 1);
```

If you want to update the state based on the previous state, you can use the function form of setCount.

```javascript
setCount(prevCount => prevCount + 1);
```

If you have an expensive calculation for your initial state, you can pass a function to useState that will only be called on the initial render.

```javascript
const [count, setCount] = useState(() => {
	console.log('initializing count');
	return 0;
});
```

## useEffect

useEffect is a hook that allows you to perform some side effects based on dependency changes or on initial render.

```javascript
useEffect(() => {
	console.log('useEffect');
}, [dependency]);
```

If you want to perform a side effect only on initial render, you can pass an empty array as the second argument.

```javascript
useEffect(() => {
	console.log('only on initial render');
}, []);
```

If you want to perform a side effect on every render, omit the second argument (not recommended).

```javascript
useEffect(() => {
	console.log('on every render');
});
```

If you want to perform a side effect when the component unmounts, return a function from the useEffect callback. Typically, this is for cleanup or removing event listeners.

```javascript
useEffect(() => {
	const handleResize = () => console.log('resizing');

	window.addEventListener('resize', handleResize);

	return () => {
		window.removeEventListener('resize', handleResize);
	};
});
```

## useContext

useContext is a hook that allows you to consume context in a functional component. It is great for passing down a global state that many components need to consume.

```javascript
const Context = createContext();

const App = () => {
	return (
		<Context.Provider value={value}>
			<Component />
		</Context.Provider>
	);
};
```

You can pass multiple values to the context provider.

```javascript
<Context.Provider value={[value1, value2]}>
<Context.Provider value={{ value1, value2 }}>
```

To consume the context, you can use the useContext hook.

```javascript
const value = useContext(Context);
```

## useRef

useRef is a hook that allows you to create a mutable ref object. It is great for accessing DOM nodes or storing mutable values. It can also be used to persist values between renders.

```javascript
const ref = useRef();
```

If uninitialized, the ref object will look like the following: `{ current: undefined }`

You would then pass the ref object to the DOM node using the ref prop.

```javascript
<div ref={ref}></div>
```

You can then access the DOM node using the current property.

```javascript
console.log(ref.current);
```

A common use case with DOM elements is to focus an inputElement on initial render, or via a button click.

```javascript
const inputRef = useRef();

// focus on initial render
useEffect(() => {
	if (!inputRef.current) return;

	inputRef.current.focus();
}, [inputRef]);

// focus on button click
<button onClick={() => inputRef.current.focus()}>Focus</button>;
```

Another common use case is to persist values between renders.

```javascript
const [count, setCount] = useState(0);
const countRef = useRef(0);

useEffect(() => {
	countRef.current = count;
}, [count]);

// countRef.current will always be the previous value of count
```

## useMemo

useMemo is a hook that allows you to memoize or 'cache' expensive or slow calculations. It is great for optimizing performance.

```javascript
const memoizedValue = useMemo(() => {
	return slowFunction(value);
}, [value]);
```

It can also be used for referential equality.

```javascript
// If we didn't use useMemo here, themeStyles recreate on every render, even if dark didn't change.
const themeStyles = useMemo(() => {
	return {
		backgroundColor: dark ? 'black' : 'white',
		color: dark ? 'white' : 'black',
	};
}, [dark]);

// Thereby, this useEffect would run on every render, even if dark didn't change.
useEffect(() => {
	console.log('Theme changed');
}, [themeStyles]);
```

## useCallback

useCallback is a hook that allows you to memoize functions. It is great for optimizing performance. Essentially, it is like useMemo, but for functions.

```javascript
const memoizedCallback = useCallback(() => {
	return [number, number + 1, number + 2];
}, [number]);
```

If we didn't use useCallback here, the function would be recreated on every render, even if number didn't change. And if we had a useEffect that utilized this function, it would run on every render as well, even if number didn't change.

```javascript
useEffect(() => {
	console.log('Number changed');
}, [memoizedCallback]);
```

## useReducer

useReducer is a hook that allows you to manage state in a more complex way. It is great for managing state that has multiple sub-values or when the next state depends on the previous state.

```javascript
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

The first argument is the reducer function, and the second argument is the initial state.

```javascript
// It's typically best to use an ACTIONS enum to avoid typos.
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
			throw new Error(); // we could also return state here
	}
};
```

We can then dispatch actions to update the state.

```javascript
<button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
<button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
```

We can also pass a payload to the dispatch function.

```javascript
const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			return { count: state.count + action.payload ?? 1 };
		case ACTIONS.DECREMENT:
			return { count: state.count - action.payload ?? 1 };
		default:
			throw new Error(); // we could also return state here
	}
};

<button onClick={() => dispatch({ type: ACTIONS.INCREMENT, payload: 5 })}>+5</button>
<button onClick={() => dispatch({ type: ACTIONS.DECREMENT, payload: 5 })}>-5</button>
```

## useTransition

useTransition is a hook that allows you to have multiple state changes occur and rank them in order of priority. This is useful when you have a sluggish application and need to prioritize the state of one variable over another.

By default, all state changes in React are high priority, meaning for the app to rerender, it must wait for all state changes to finish. This can cause a sluggish app.

With useTransition, you can set a slow state change to low priority, meaning that it will not block the app from rerendering.

```javascript
const [isPending, startTransition] = useTransition();

const handleChange = e => {
	setInput(e.target.value);
	startTransition(() => {
		setList(new Array(LIST_SIZE).fill(e.target.value));
	});
};
```

If we didn't use useTransition here, the app would take a long time to rerender because it would have to wait for the list to be populated before rerendering. With useTransition, the app will rerender immediately, and the list will be populated when it is ready.

If we want to specify a timeout, we can pass an object as an argument.

```javascript
const [isPending, startTransition] = useTransition({ timeoutMs: 1000 });
```

useTransition should be used sparingly, as it creates multiple rerenders.

## useDeferredValue

useDeferredValue is a hook that allows you to wait on evaluating a value until a certain timeout has passed. Think of an input field that has a debounce on it so that it doesn't fire on every keystroke.

```javascript
const deferredValue = useDeferredValue(value);

const list = useMemo(() => {
	return new Array(LIST_SIZE).fill(0).map((_, i) => <div key={i}>{deferredInput}</div>);
}, [deferredInput]);
```

If we had used input here instead of deferredInput, the list would rerender on every keystroke. With deferredInput, the list will only rerender after the timeout has passed.

You can also specify a timeout like with useTransition.

```javascript
const deferredValue = useDeferredValue(value, { timeoutMs: 1000 });
```

## useLayoutEffect

useLayoutEffect is a hook that is similar to useEffect, but it runs synchronously after all DOM mutations. It is great for DOM measurements and DOM manipulations.

```javascript
const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
const inputRef = useRef();

useLayoutEffect(() => {
	const { width, height } = inputRef.current?.getBoundingClientRect();

	if (width && height) setDimensions({ width, height });
}, [inputRef]);
```

## useImperativeHandle

useImperativeHandle is a hook that is useful for referencing multiple child elements of a child component inside a parent component.

Rather than creating multiple refs, useImperativeHandle allows you to create a single ref that references multiple child elements.

```javascript
const Parent = () => {
	const modalRef = useRef();

	return <Modal ref={modalRef} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};
```

Then in the child component, we use imperativeHandle to create a ref that references multiple child elements.

```javascript
const Modal = (props, ref) => {
	const closeRef = useRef();
	const confirmRef = useRef();
	const denyRef = useRef();

	useImperativeHandle(ref, () => {
		return {
			focusClose: () => closeRef.current.focus(),
			focusConfirm: () => confirmRef.current.focus(),
			focusDeny: () => denyRef.current.focus(),
		};
	});

	if (!props.isOpen) return null;

	return (
		<div ref={ref}>
			<button ref={closeRef} onClick={props.onClose}>
				Close
			</button>
			<button ref={confirmRef} onClick={props.onClose}>
				Confirm
			</button>
			<button ref={denyRef} onClick={props.onClose}>
				Deny
			</button>
		</div>
	);
};

export default forwardRef(Modal);
```

Finally, in the parent component, we can use the ref to focus on the child elements.

```javascript
<button onClick={() => modalRef.current.focusClose()}>Close</button>
<button onClick={() => modalRef.current.focusConfirm()}>Confirm</button>
<button onClick={() => modalRef.current.focusDeny()}>Deny</button>
```

## useId

useId is a hook that tells React to generate a unique ID for you. It is useful for accessibility and will ensure a unique ID for every render.

```javascript
const id = useId();
```

It's important to note that the generated ID is not selectable with either of the following methods.

```javascript
document.getElementById();
document.querySelector();
```

This is done on purpose to prevent bad practices.

## useDebugValue

useDebugValue is a hook that can only be used in custom hooks that allows you to display a label for values in React DevTools.

It is typically only for debugging purposes.

```javascript
const useCustomHook = () => {
	const [value, setValue] = useState(0);

	useDebugValue(value);

	return [value, setValue];
};
```

# Custom Hooks

Custom hooks are a way to share logic between components. They are just functions that use other hooks but are useful to increase reusability in React components.

The following custom hooks are all useful hooks that I've created from following tutorials and building projects.

## useToggle

useToggle is a custom hook that acts like useState but can toggle a boolean value between true and false. It can also be passed a boolean value to set it to that value explicitly.

```javascript
const [value, toggleValue] = useToggle(false);

<button onClick={toggleValue}>Toggle</button>
<button onClick={() => toggleValue(true)}>Set to true</button>
<button onClick={() => toggleValue(false)}>Set to false</button>
```

## useTimeout

useTimeout is a custom hook that sets a timeout on an action and executes it after the timeout has passed. It also includes a clear function to clear the timeout, and a reset function to reset the timeout.

```javascript
const { clear, reset } = useTimeout(() => {
	console.log('Hello, world!');
}, 1000);
```

## useDebounce

useDebounce is a custom hook that debounces a value. It is useful for inputs that you don't want to fire on every keystroke or a value that rapidly changes.

In this example, the alert will fire after 1 second of the count not changing.

```javascript
useDebounce(() => alert(count), 1000, [count]);
```

## useUpdateEffect

useUpdateEffect is a custom hook that is similar to useEffect, but it doesn't run on the first render. It is useful for when you want to run an effect only after the first render.

Notice that its syntax and usage is identical to useEffect.

```javascript
useUpdateEffect(() => {
	console.log('Hello, world!');
}, [count]);
```

## useArray

useArray is a custom hook that is useful for manipulating arrays. It includes the ability to set the array to an entirely new array, and functions for adding, removing, updating, and clearing, without the peskiness of React's immutability of state.

It stores the array using useState, so it can be used in the same way as useState.

```javascript
const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5]);

<button onClick={() => set([1, 2, 3])}>Set to [1, 2, 3]</button>
<button onClick={() => push(6)}>Push 6</button>
<button onClick={() => remove(0)}>Remove first element</button>
<button onClick={() => filter((n) => n < 3)}>Filter out all numbers less than 3</button>
<button onClick={() => update(0, 10)}>Update first element to 10</button>
<button onClick={clear}>Clear</button>
```

## usePrevious

usePrevious is a custom hook that is useful for storing the previous value of a state. It is useful for comparing the previous value to the current value.

It acts as a reference to the previous value, so it will automatically update when the value changes.

```javascript
const [count, setCount] = useState(0);
const previousCount = usePrevious(count);
```

## useStateWithHistory

useStateWithHistory is a custom hook that is useful for storing the previous values of a state. It is useful for comparing and reading the entire history of a value.

It acts like useState with the first two return values, then includes an array of the history, a pointer to the current value (index) and functions to go back, go forward, and go to a specific point in the history.

```javascript
const [count, setCount, { history, pointer, back, forward, go }] = useStateWithHistory(1);

<button onClick={back}>Back</button>
<button onClick={forward}>Forward</button>
<button onClick={() => go(2)}>Go to index 2</button>
```

## useStorage

useStorage is a custom hook that is useful for storing values in localStorage or sessionStorage. It is useful for storing values that you want to persist between sessions. It requires a key and a default value.

It acts like useState with the first two return values, then includes a function to clear the storage.

```javascript
const [name, setName, removeName] = useSessionStorage('name', 'Kyle');
const [age, setAge, removeAge] = useLocalStorage('age', 26);
```

## useAsync

useAsync is a custom hook that is useful for handling asynchronous functions. It takes a callback function that returns a promise, and an optional array of dependencies.

It returns loading, error, and value states.

```javascript
const { loading, error, value } = useAsync(() => {
	return new Promise((resolve, reject) => {
		const success = true;

		setTimeout(() => {
			success ? resolve('Hi') : reject('Error');
		}, 1000);
	});
});
```

## useFetch

useFetch is a custom hook that is an extension of useAsync. It is useful for fetching data from an API. It takes a URL, an optional object for API options and headers, and an optional array of dependencies.

It returns loading, error, and value states. In this case, the value will update with the data from the API every time the ID changes since it is a dependency.

```javascript
const API_URL = 'https://jsonplaceholder.typicode.com/todos/';

const [id, setId] = useState(1);
const { loading, error, value } = useFetch(`${API_URL}${id}`, {}, [id]);
```