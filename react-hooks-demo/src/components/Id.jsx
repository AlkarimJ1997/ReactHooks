import { useId } from 'react';

const EmailForm = () => {
	const id = useId();

	return (
		<>
			<label htmlFor={`email-${id}`}>Email</label>
			<input id={`email-${id}`} type='email' />
			<br />
			<label htmlFor={`name-${id}`}>Name</label>
			<input id={`name-${id}`} type='text' />
		</>
	);
};

const Id = () => {
	return (
		<>
			<EmailForm />
			<article style={{ marginBlock: '1rem' }}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero cum
				praesentium aut ducimus. Dolore voluptates impedit molestias blanditiis
				unde iure atque necessitatibus mollitia saepe eligendi facere nesciunt
				quibusdam doloremque repellat deleniti fugit nulla a, sit dicta vel
				delectus. Debitis minima voluptates reiciendis nulla asperiores non
				laboriosam ratione, vero alias laudantium.
			</article>
			<EmailForm />
		</>
	);
};

export default Id;
