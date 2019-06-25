import React from 'react'
import ListItem from './ListItem/ListItem'
import styles from  './ListWraper.module.scss'
import uuid from 'uuid';

const ListWrapper = (props) => (
		<ul className={styles.listWrapper_list}>
			
			{props.items.map( item=> (
				<ListItem key={uuid.v4()} {...item} />
			))}
		</ul>
)



export default ListWrapper;