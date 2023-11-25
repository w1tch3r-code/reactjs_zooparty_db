/* eslint-disable react/prop-types */
import AnimalsItem from "./AnimalsItem";
import { v4 as uuidv4 } from "uuid";

const AnimalsList = (props) => {
	return (
		<section className="section__animals">
			<h1>ZooPartyDB</h1>
			<h2>Explore the fascinating world of zoo animals!</h2>
			<div className='div__wrapper'>
				{props.animalsArr.map((animal) => {
					const funFactsProps = {};
					for (let i = 0; i < animal.funFacts.length; i++) {
						// Erzeugung von funFacts1, funFacts2 und funFacts3
						// mit den zugehörigen Strings. Diese werden in das Object
						// funFactsProps geschrieben und unten an AnimalsItem übergeben.
						funFactsProps[`funFacts${i + 1}`] = animal.funFacts[i];
					}

					return (
						<AnimalsItem
							key={uuidv4()}
							emoji={animal.emoji}
							name={animal.name}
							species={animal.species}
							habitat={animal.habitat}
							diet={animal.diet}
							lifespan={animal.lifespan}
							{...funFactsProps}
							
						/>
					);
				})}
			</div>
		</section>
	);
};

export default AnimalsList;
