import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
	<Layout>
		<SEO title="About" />
		<div style={{
		alignItems: 'start'
		}}>
		<h1>Hi there</h1>
		<h2>Social Media</h2>	
		<h2>Previously at</h2>
		<h2>Contact</h2>
		<h2>About this site</h2>
		<div>
			<span>This was built using GatsbyJS – go check them out!</span>
			<br/>
			<span>Backend is (to authenticate with Google and Instagram APIs) using Google Cloud</span>
		</div>
	</div>
	</Layout>
);

export default AboutPage;
