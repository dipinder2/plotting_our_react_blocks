import React from 'react';
import styles from './css/Advertisement.module.css'

export default class Advertisement extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.advertise}></div>
		);
	}
}
