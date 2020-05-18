import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

function IndexPage() {
	return (
		<Layout>
			<SEO title="Home" />
			<h1>Hey there!</h1>
			<div>
				A little about myself: I'm a coffee enthusiast (some say snob and they're probably not wrong), software engineer, and snowboarder.
			</div>
			<h2>2020 Goals</h2>
			<ul>
				<li>Build a site</li>
				<li>Build a coffee app</li>
				<li>Post to Instagram 52 times</li>
			</ul>
			<h2>Life Goals</h2>
			<ul>
				<li>Live abroad somewhere</li>
				<li>Visit all the continents (excluding Antartica)</li>
			</ul>
			<div></div>
		</Layout>
	);
}
export default IndexPage;
