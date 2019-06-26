import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

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
	<header
		style={{
			background: "rebeccapurple",
			marginBottom: "1.45rem",
		}}
	>
		<div
			style={{
				margin: "0 auto",
				maxWidth: 960,
				padding: "1.45rem 1.0875rem",
			}}
		>
			<h1 style={{ display: "inline", margin: 0 }}>
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
			<ul style={{
					listStyle: "none",
					float: "right",
					paddingBottom: "1.45rem",
					display: "inline",
				}}
			>
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
