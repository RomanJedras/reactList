import React from 'react'
import ListItem from './ListItem/ListItem'
import './ListWraper.css'
import {twitterAccounts} from "../../data/twitterAccounts";

const ListWrapper = (props) => (
		<ul className={'listWrapper_list'}>
			
			{twitterAccounts.map(item => (
				<ListItem key={item.name} {...item} />
			))}
		</ul>
)



export default ListWrapper;