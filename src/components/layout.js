/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div style={{
			height: '100vh',
			maxHeight: '100vh',
			width: '100vw',
		}}>
			<Header siteTitle={data.site.siteMetadata.title} />
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexDirection: "column",
					margin: "0 auto",
					maxWidth: 960,
				}}
			>
				<main>{children}</main>
				<footer>
					Hi there this is gatsby site
				</footer>
			</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
