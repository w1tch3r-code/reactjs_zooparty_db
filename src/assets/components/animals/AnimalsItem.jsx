/* eslint-disable react/prop-types */
const AnimalsItem = (props) => {
	return (
		<article>
			<div>
				<span>{props.emoji}</span>
				<h3>{props.name}</h3>
				<p>{props.species}</p>
				<p>{props.habitat}</p>
				<p>{props.diet}</p>
				<p>{`${props.lifespan} years`}</p>
			</div>
			<div>
				<ul>
					<li>{props.funFacts1}</li>
					<li>{props.funFacts2}</li>
					<li>{props.funFacts3}</li>
				</ul>
			</div>
		</article>
	);
};

export default AnimalsItem;
