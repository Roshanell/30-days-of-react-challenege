const Prerequisites = () => {

	const techs = ["HTML", "CSS", "JavaScript"];
	const techsFormatted = techs.map((tech) => <li key={tech} className="prereqs-list">{tech}</li>);
	return techsFormatted;
};

export default Prerequisites;
