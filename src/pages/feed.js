import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const FeedPage = () => (
	<Layout>
		<SEO title="About" />
		<h1>Hi there</h1>
		<a href="mailto:test@gmail.com">test@gmail.com</a>
		<img src="https://www.instagram.com/p/B9KJxV_hKlc/" />
	</Layout>
);

export default FeedPage;
