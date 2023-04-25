import { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const OnScreen = () => {
	const headerRef = useRef();
	const visible = useOnScreen(headerRef, '-100px');

	return (
		<div>
			<h1>Header</h1>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius
				placeat at modi dolorum? Reiciendis in officiis fugiat voluptatibus
				expedita ex, necessitatibus eligendi sequi, soluta optio commodi dolorum.
				Saepe fugiat velit nostrum iste pariatur a ratione minus voluptates eos
				perspiciatis, possimus aut tenetur corrupti voluptatibus est labore
				laborum accusamus sapiente quas itaque, distinctio dolores deleniti ut
				repudiandae. Enim nobis possimus aspernatur obcaecati maxime. Repellat,
				tempore laborum aperiam nihil, quod cupiditate molestias facilis dolor
				quas, mollitia ex animi officiis exercitationem qui deserunt illum.
				Praesentium vel cum cumque voluptatum in eveniet quidem hic nemo a
				suscipit minima, laborum ipsam. Omnis, placeat iusto!
			</div>
			<h1 ref={headerRef}>Header 2 {visible && '(Visible)'}</h1>
			<div>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
				perferendis quod id incidunt eos omnis obcaecati, aperiam et consequatur,
				unde corrupti, nihil ea. Suscipit repellat minus repudiandae at ipsum ad
				perspiciatis quia hic expedita exercitationem. Itaque vel soluta molestiae
				quibusdam repellendus fugit ex. Velit voluptates blanditiis laborum
				eveniet nulla quos mollitia fuga laboriosam praesentium! Aut ipsum
				veritatis, incidunt molestiae explicabo exercitationem at qui ipsam natus
				deserunt expedita quos aspernatur nisi corporis odio quisquam facere iusto
				culpa dicta beatae? Voluptatum voluptates possimus minima molestiae nam
				itaque saepe mollitia nostrum cumque ipsam, ea iure ex reprehenderit
				suscipit tempora odit recusandae maiores
			</div>
		</div>
	);
};

export default OnScreen;
