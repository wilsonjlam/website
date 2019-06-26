import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
	<Layout>
		<SEO title="About" />
		<h1>Hi there</h1>
		<a href="mailto:test@gmail.com">test@gmail.com</a>
	</Layout>
);

export default AboutPage;
