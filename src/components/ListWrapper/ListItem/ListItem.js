import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListItem.module.scss';
import Button from "../../Button/Button";
import Title from "../../Title/Title";

const ListItem = ({name, image, description, twitterLink}) => {
	
	const ImaageTag = image ? 'img':  'div'
	
	return (
		<li className={styles.wrapper}>
			<ImaageTag alt={name || ''} src={image} className={image ? styles.image: styles.imageNone}/>
			<div>
				<Title>{name}</Title>
				<p className={styles.description}>{description}</p>
				<Button href={twitterLink}>visit twitter page</Button>
			</div>
		</li>
	)
};

ListItem.defaultProps = {
	image : null,
	description: 'One of React creators'
};

ListItem.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string,
	description: PropTypes.string.isRequired,
	twitterLink: PropTypes.string.isRequired
};



export default ListItem;