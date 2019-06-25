import React from 'react'
import styles from './FormComponent.module.scss'
import Input from '../Input/Input'
import Button from "../Button/Button";
import Title from "../Title/Title";


const FormComponet = ({submitFn}) => (
	<div className={styles.wrapper}>
		<Title>Add new Twitter Account</Title>
		<form autoComplete={"off"} className={styles.formComponent__form} onSubmit={submitFn}>
			<Input
				name={"name"}
				label={"Name"}
				maxLength={30}
			/>
			<Input
				name={"link"}
				label={"Tweeter Link"}
			/>
			<Input
				name={"image"}
				label={"Image"}
			/>
			<Input
				tag="textarea"
				name="description"
				label="Description"
			/>
			<Button>add new Item</Button>
		</form>
	</div>
)

// eslint-disable-next-line

export default FormComponet





