function Header(props) {
	return (
		<header>
			<div className="header-wrapper">
				<h1>{props.welcome}</h1>
				<h2>{props.title}</h2>
				<h3>{props.subtitle}</h3>
				<p>{props.author}</p>
				<small>{props.date}</small>
			</div>
		</header>
	);
}

export default Header;
