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
import Script from './components/Script';
import DeepCompareEffect from './components/DeepCompareEffect';
import EventListener from './components/EventListener';
import OnScreen from './components/OnScreen';
import WindowSize from './components/WindowSize';
import Geolocation from './components/Geolocation';
import StateWithValidation from './components/StateWithValidation';
import Size from './components/Size';
import ClickOutside from './components/ClickOutside';
import DarkMode from './components/DarkMode';
import CopyToClipboard from './components/CopyToClipboard';
import Cookie from './components/Cookie';
import Translation from './components/Translation';
import OnlineStatus from './components/OnlineStatus';
import RenderCount from './components/RenderCount';
import DebugInformation from './components/DebugInformation';
import Hover from './components/Hover';
import LongPress from './components/LongPress';

function App() {
	const renderSet = 5;

	if (renderSet === 1) {
		return (
			<>
				{/* Custom Hooks */}
				<Toggle />
				<Timeout />
				<Debounce />
				<UpdateEffect />
				<Array />
			</>
		);
	}

	if (renderSet === 2) {
		return (
			<>
				{/* More Custom Hooks */}
				<Previous />
				<StateWithHistory />
				<Storage />
				<Async />
				<Fetch />
			</>
		);
	}

	if (renderSet === 3) {
		return (
			<>
				{/* More Custom Hooks */}
				<Script />
				<DeepCompareEffect />
				<EventListener />
				<OnScreen />
				<WindowSize />
			</>
		);
	}

	if (renderSet === 4) {
		return (
			<>
				{/* More Custom Hooks */}
				<Geolocation />
				<StateWithValidation />
				<Size />
				<ClickOutside />
				<DarkMode />
				<CopyToClipboard />
				<Cookie />
				<Translation />
			</>
		);
	}

	return (
		<>
			{/* More Custom Hooks */}
			<OnlineStatus />
			<RenderCount />
			<DebugInformation />
			<Hover />
			<LongPress />
		</>
	)
}

export default App;
