import React from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import FormComponet from "./components/FormComponent/FormComponent";

const initialStateArray = [
	{
		image: 'https://www.tate.org.uk/art/images/research/2148_10.jpg',
		name: 'Dan Abramov',
		twitterLink: 'https://twitter.com/dan_abramov',
	},
	{
		image: 'https://www.tate.org.uk/art/images/research/2148_10.jpg',
		name: 'Ryan Florence',
		description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
		twitterLink: 'https://twitter.com/ryanflorence',
	},
	{
		image: 'https://www.tate.org.uk/art/images/research/2148_10.jpg',
		name: 'Michael Jackson',
		description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
		twitterLink: 'https://twitter.com/mjackson',
	},
	{
		image: 'https://www.tate.org.uk/art/images/research/2148_10.jpg',
		name: 'Kent C. Dodds',
		description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
		twitterLink: 'https://twitter.com/kentcdodds',
	},
];


class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			items : [...initialStateArray]
		};
		
	}
	
	addItem = (e) => {
		e.preventDefault();
		const newItem = {
			name: e.target[0].value,
			twitterLink: e.target[1].value,
			image: e.target[2].value,
			description: e.target[3].value,
		}
		
		this.setState(prevState => ({
			items: [...prevState.items, newItem],
		}));
		
		e.target.reset();
	}
	
	
	render = () => {
		return (
		
		<div className={'wrapper'}>
			<div className={'col-xs-12, col-md-6'}>
			<ListWrapper items={this.state.items}/>
			</div><div className={'col-xs-12, col-md-6'}>
			<FormComponet submitFn={this.addItem}/>
		</div>
		</div>
		
		
		
		);
	}
	
}



export default App;