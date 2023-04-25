import useOnlineStatus from '../hooks/useOnlineStatus';

const OnlineStatus = () => {
	const online = useOnlineStatus();

	return <div>{online.toString()}</div>;
};

export default OnlineStatus;
