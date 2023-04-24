# React Hooks

This repository contains a collection of React Hooks and Custom Hooks to help teach the basics of React Hooks.

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