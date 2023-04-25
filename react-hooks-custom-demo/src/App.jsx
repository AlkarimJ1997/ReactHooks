import Toggle from './components/Toggle';
import Timeout from './components/Timeout';
import Debounce from './components/Debounce';
import UpdateEffect from './components/UpdateEffect';
import Array from './components/Array';
import Previous from './components/Previous';
import StateWithHistory from './components/StateWithHistory';
import Storage from './components/Storage';
import Async from './components/Async';
import Fetch from './components/Fetch';

function App() {
	return (
		<>
			{/* Custom Hooks */}
			<Toggle />
			<Timeout />
			<Debounce />
			<UpdateEffect />
			<Array />

			{/* More Custom Hooks */}
			<Previous />
			<StateWithHistory />
			<Storage />
			<Async />
			<Fetch />
		</>
	);
}

export default App;
