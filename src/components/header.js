import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./header.module.css";

const ListLink = ({ to, children }) => (
	<li style={{ display: "inline-block", margin: "1rem" }}>
		<Link to={to}>
			<h2>
				{children}
			</h2>
		</Link>
	</li>
);

const Header = ({ siteTitle }) => (
	<header>
		<div>
			<h1>
				<Link
					to="/"
					style={{
						color: "white",
						textDecoration: "none",
					}}
				>
					{siteTitle}
				</Link>
			</h1>
			<ul>
				<ListLink to="/">Home</ListLink>
				<ListLink to="/about">About</ListLink>
				<ListLink to="/contact">Contact</ListLink>
			</ul>
		</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: "",
};

export default Header;
