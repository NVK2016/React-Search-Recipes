import React from "react";
import Header from './Header';
import Recipes from './Recipes';
// import Form from './form';
import Footer from './Footer';
import '../index.css';

export default function Home(props) {
	//  console.log(props);

	return (
		<div className="jumbotron ">
			<Header />
			<br />
			<Recipes />
			<br/>
			<Footer />
		</div>
	)
}
