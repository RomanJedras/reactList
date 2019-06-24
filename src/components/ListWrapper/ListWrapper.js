import React from 'react'
import ListItem from './ListItem/ListItem'
import './ListWraper.css'
import {twitterAccounts} from "../../data/twitterAccounts";

const ListWrapper = (props) => (
		<ul className={'listWrapper_list'}>
			
			{twitterAccounts.map(({name,description,image,twitterLink}) => (
				<ListItem  name={name}
				           description={description}
				           image={image}
				           link = {twitterLink}
				/>
			))}
		</ul>
)



export default ListWrapper;