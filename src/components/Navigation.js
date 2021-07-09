import React from 'react';
import styles from './css/Navigation.module.css'
export default class Navigation extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.navigation}></div>
		);
	}
}
