import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const PROFILE_SRC = "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/s150x150/79374439_467595477202794_2443140542297538560_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_ohc=BjPSIW0waOsAX-z8Xi3&oh=b89eae7460faa3171f1e4de6c8c16b83&oe=5FBB4AF3";

export default function IndexPage() {
	return (
		<Layout>
			<SEO title="Home" />
			<div style={{display:"flex"}}>
				<img src={PROFILE_SRC} height={'50px'} width={'50px'} style={{
					borderRadius: '50%',
					marginRight: '12px',
				}}/>
				<h1>Hey there!</h1>
			</div>
			<div>
				<div>Thanks for dropping by :)</div>
				<div>A little about myself: I'm a coffee enthusiast, software engineer, and snowboarder.</div>
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
