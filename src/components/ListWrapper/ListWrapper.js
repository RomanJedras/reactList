import React from 'react'
import ListItem from './ListItem/ListItem'
import './ListWraper.css'
import {twitterAccounts} from "../../data/twitterAccounts";

const ListWrapper = (props) => (
		<ul className={'listWrapper_list'}>
			
			{twitterAccounts.map( item=> (
				<ListItem  name={
					item.name}
				           description={item.description}
				           image={item.image}
				           link = {item.twitterLink}
				/>
			))}
		</ul>
)



export default ListWrapper;