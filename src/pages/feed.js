import React, {
	useEffect,
	useState
} from "react";
import {
	Link
} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function FeedPage() {
	const [image, setImage] = useState()
	useEffect(() => {
		fetch('https://www.instagram.com/p/CEe0gBCBRwF/media')
			.then(response => setImage(response.url));
	}, []);
	return (
		<Layout>
		<SEO title="About" />
		<img src={image}/>
	</Layout>
	);
}
